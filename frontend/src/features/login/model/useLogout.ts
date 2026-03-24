import { useMutation } from '@tanstack/react-query';
import { authApi } from '../api/authApi';
import { removeCookie } from '@/shared/lib/cookie';

export const useLogout = () => {
  return useMutation({
    mutationFn: () => authApi.logout(),
    onSettled: () => {
      removeCookie('accessToken');
      localStorage.removeItem('auth-storage');
      window.location.replace('/');
    },
  });
};
