import { axiosInstance } from '@/shared/lib/axios';
import type { BoardListResponse } from '../model/types';

export const getPostList = async (
  page: number = 0
): Promise<BoardListResponse> => {
  const response = await axiosInstance.get('/community', { params: { page } });
  return response.data;
};
