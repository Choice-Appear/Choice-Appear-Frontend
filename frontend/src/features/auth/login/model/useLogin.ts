import { authApi } from '../api/authApi';
import type { LoginRequest } from '../api/types';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginRequest) => authApi.login(data),
  });
};
