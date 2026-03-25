import { useNavigate } from 'react-router-dom';
import { useSignupStore } from './useSignupStore';
import { useTermsAgreementStore } from './useTermsAgreementStore';
import { signupApi } from '../api/signupApi';
import { useMutation } from '@tanstack/react-query';
import type { SignupRequest } from '../api/types';

export const useSignupMutation = () => {
  const navigate = useNavigate();
  const { resetForm } = useSignupStore();
  const { reset } = useTermsAgreementStore();

  return useMutation({
    mutationFn: (data: SignupRequest) => signupApi(data),
    onSuccess: () => {
      resetForm();
      reset();
      navigate('/login');
    },
    onError: error => {
      console.error('회원가입 실패: ', error);
    },
  });
};
