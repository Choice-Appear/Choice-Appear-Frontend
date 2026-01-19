import { authApi } from '@/shared/api/auth';
import type { LoginRequest } from '@/shared/api/auth';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginRequest) => authApi.login(data),
  });
};
