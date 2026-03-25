import { useMutation } from '@tanstack/react-query';
import { useSignupStore } from './useSignupStore';
import { nicknameCheck, profileIdCheck } from '../api/duplicatedCheckApi';

export const useCheckProfileId = () => {
  const { setProfileIdAvailable } = useSignupStore();

  return useMutation({
    mutationFn: profileIdCheck,
    onSuccess: data => {
      setProfileIdAvailable(!data.profileIdExists);
    },
    onError: () => {
      setProfileIdAvailable(null);
    },
  });
};

export const useCheckNickname = () => {
  const { setNicknameAvailable } = useSignupStore();

  return useMutation({
    mutationFn: nicknameCheck,
    onSuccess: data => {
      setNicknameAvailable(!data.nicknameExists);
    },
    onError: () => {
      setNicknameAvailable(null);
    },
  });
};
