import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from './useAuthStore';
import { authApi } from '../api/authApi';

export const useLogout = () => {
  const { logout } = useAuthStore();

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSettled: () => {
      logout();
    },
  });
};
