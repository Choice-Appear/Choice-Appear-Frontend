import { axiosInstance } from '@/shared/lib/axios';
import type { LoginRequest, LoginResponse } from '../model/types';

export const authApi = {
  login: (data: LoginRequest) =>
    axiosInstance.post<LoginResponse>('/auth/login', data),
  logout: () => axiosInstance.post('/auth/logout'),
};


