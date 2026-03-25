import { axiosInstance } from '@/shared/lib/axios';
import type { SignupRequest, SignupResponse } from './types';

export const signupApi = async (
  data: SignupRequest
): Promise<SignupResponse> => {
  const response = await axiosInstance.post('/auth/register', data);
  return response.data;
};
