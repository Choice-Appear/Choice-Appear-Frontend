import axios, { AxiosError, type AxiosInstance } from 'axios';
import { getCookie, removeCookie, setCookie } from '../cookie';

const baseURL = import.meta.env.VITE_API_URL;

/* axios 인스턴스 생성 */
export const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 쿠키 사용
  timeout: 30000,
});

/* refresh 진행 */
const dispatchUnauthorized = (redirectTo: string) => {
  if (redirectTo !== '/login') {
    window.dispatchEvent(
      new CustomEvent('unauthorized', {
        detail: { redirectTo },
      })
    );
  }
};

/* 요청 인터셉터 */
axiosInstance.interceptors.request.use(
  config => {
    // 쿠키에서 토큰 가져오기
    const token = getCookie('accessToken');

    // 토큰 있으면 Authorization 헤더에 추가
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

/* 응답 인터셉터 */
axiosInstance.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as typeof error.config & {
      _retry?: boolean;
    };

    // 1) 401이 아니거나 이미 재시도한 요청은 reject
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    // 2) logout 요청이 401이면 refresh 없이 통과
    if (originalRequest.url?.includes('/auth/logout')) {
      return Promise.reject(error);
    }

    const currentPath = window.location.pathname;

    // 3) refresh 요청 자체가 401이면 로그아웃 처리
    if (originalRequest.url?.includes('/auth/refresh')) {
      removeCookie('accessToken');
      dispatchUnauthorized(currentPath);
      return Promise.reject(error);
    }

    // 4) 무한루프 방지 플래그 세팅 후 refresh
    originalRequest._retry = true;

    try {
      const response = await axiosInstance.post('/auth/refresh');
      const { accessToken, accessTokenExpiresAt } = response.data;

      setCookie('accessToken', accessToken, {
        expires: new Date(accessTokenExpiresAt),
      });
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      originalRequest.headers!.Authorization = `Bearer ${accessToken}`;
      return axiosInstance(originalRequest);
    } catch (refreshError) {
      removeCookie('accessToken');
      dispatchUnauthorized(currentPath);
      return Promise.reject(refreshError);
    }
  }
);
