import { authApi } from '@/shared/api/auth';
import type { LoginRequest } from '@/shared/api/auth';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginRequest) => authApi.login(data),
    onSuccess: () => {
      navigate('/');
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 401) {
        alert('아이디 또는 비밀번호를 확인해주세요.');
      } else {
        alert('로그인에 실패했습니다.');
      }
    },
  });
};
