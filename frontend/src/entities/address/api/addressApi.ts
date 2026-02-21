import { axiosInstance } from '@/shared/lib/axios';
import type {
  AddAddressResponse,
  AddAddressRequest,
  GetAddressListResponse,
} from '../model/types';

export const addressApi = {
  /* 배송지 등록 */
  addAddress: async (data: AddAddressRequest): Promise<AddAddressResponse> => {
    const response = await axiosInstance.post<AddAddressResponse>(
      '/addresses',
      data
    );

    return response.data;
  },

  /* 배송지 목록 조회 */
  getAddressList: async (): Promise<GetAddressListResponse[]> => {
    const response =
      await axiosInstance.get<GetAddressListResponse[]>('/addresses');

    return response.data;
  },

  /* 배송지 삭제 */
  deleteAddress: async (id: number): Promise<void> => {
    await axiosInstance.delete(`/addresses/${id}`);
  },
};
