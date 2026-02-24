import { axiosInstance } from '@/shared/lib/axios';
import type {
  AddAddressResponse,
  AddAddressRequest,
  GetAddressListResponse,
  GetAddressResponse,
  ModifyAddressRequest,
  ModifyAddressResponse,
} from '../model/types';

export const addressApi = {
  /* 배송지 등록 */
  addAddress: async (data: AddAddressRequest): Promise<AddAddressResponse> => {
    const response = await axiosInstance.post<AddAddressResponse>(
      '/addresses',
      { ...data, generalPhoneNumber: data.generalPhoneNumber || null }
    );

    return response.data;
  },

  /* 배송지 목록 조회 */
  getAddressList: async (): Promise<GetAddressListResponse[]> => {
    const response =
      await axiosInstance.get<GetAddressListResponse[]>('/addresses');

    return response.data;
  },

  /* 배송지 단일 조회 */
  getAddress: async (addressId: number): Promise<GetAddressResponse> => {
    const response = await axiosInstance.get<GetAddressResponse>(
      `/addresses/${addressId}`
    );
    return response.data;
  },

  /* 배송지 수정 */
  editAddress: async (
    addressId: number,
    data: ModifyAddressRequest
  ): Promise<ModifyAddressResponse> => {
    const response = await axiosInstance.put<ModifyAddressResponse>(
      `/addresses/${addressId}`,
      { ...data, generalPhoneNumber: data.generalPhoneNumber || null }
    );
    return response.data;
  },

  /* 배송지 삭제 */
  deleteAddress: async (ids: number[]): Promise<void> => {
    await axiosInstance.delete('/addresses', {
      params: { addressIds: ids.join(',') },
    });
  },
};
