import { axiosInstance } from '@/shared/lib/axios';
import { type LoginRequest, type LoginResponse, type RefreshResponse } from '../model/types';

export const authApi = {
  login: (data: LoginRequest) =>
    axiosInstance.post<LoginResponse>('/auth/login', data),
  logout: () => axiosInstance.post('/auth/logout'),
  refresh: () => axiosInstance.post<RefreshResponse>('/auth/refresh'),
};
