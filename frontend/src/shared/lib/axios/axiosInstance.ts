import axios, { AxiosError, type AxiosInstance } from 'axios';
import { getCookie } from '../cookie';

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

/* 요청 인터셉터 */
axiosInstance.interceptors.request.use(
  config => {
    // 쿠키에서 토큰 가져오기
    const token = getCookie('accessToken');

    // 토큰 있으면 Authorizatino 헤더에 추가
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
  response => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      const currentPath = window.location.pathname;

      // 로그인 페이지에서 401 발생 시 이벤트 발생 X
      if (currentPath !== '/login') {
        window.dispatchEvent(
          new CustomEvent('unauthorized', {
            detail: { redirectTo: currentPath },
          })
        );
      }
    }
    
    return Promise.reject(error);
  }
);
