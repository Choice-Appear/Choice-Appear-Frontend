import { axiosInstance } from '@/shared/lib/axios';

/* 아이디 중복 확인 API */
export const profileIdCheck = async (profileId: string) => {
  const response = await axiosInstance.get<{ profileIdExists: boolean }>(
    '/auth/register/profile-id-exists',
    { params: { profileId } }
  );
  return response.data;
};

/* 닉네임 중복 확인 API */
export const nicknameCheck = async (nickname: string) => {
  const response = await axiosInstance.get<{ nicknameExists: boolean }>(
    '/auth/register/nickname-exists',
    { params: { nickname } }
  );
  return response.data;
};
