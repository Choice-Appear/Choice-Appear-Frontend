import axios, { AxiosError, type AxiosInstance } from 'axios';

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
    // 토큰 필요한 경우 추가
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
    return Promise.reject(error);
  }
);
