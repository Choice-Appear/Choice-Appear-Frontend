import { axiosInstance } from '@/shared/lib/axios';
import type { LoginRequest } from './types';

export const authApi = {
  login: (data: LoginRequest) =>
    axiosInstance.post<LoginRequest>('/auth/login', data),
  logout: () => axiosInstance.post('/auth/logout'),
};
