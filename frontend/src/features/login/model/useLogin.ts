import { authApi } from '../api/authApi';
import type { LoginRequest } from './types';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginRequest) => authApi.login(data),
  });
};
