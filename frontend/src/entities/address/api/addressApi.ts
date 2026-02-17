import { axiosInstance } from '@/shared/lib/axios';
import type { AddAddressResponse, AddAddressRequest } from '../model/types';

export const addressApi = {
  /* 배송지 등록 */
  addAddress: async (data: AddAddressRequest): Promise<AddAddressResponse> => {
    const response = await axiosInstance.post<AddAddressResponse>(
      '/addresses',
      data
    );

    return response.data;
  },
};
