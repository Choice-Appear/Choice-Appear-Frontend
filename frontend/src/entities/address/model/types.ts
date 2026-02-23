export interface AddressRequest {
  name: string;
  address: string;
  recipient: string;
  cellPhoneNumber: string;
  generalPhoneNumber?: string | null;
  isPrimary: boolean;
}

export interface AddressResponse {
  id: number;
  name: string;
  address: string;
  recipient: string;
  cellPhoneNumber: string;
  generalPhoneNumber?: string | null;
  isPrimary: boolean;
}

/* 배송지 추가 */
export type AddAddressRequest = AddressRequest;
export type AddAddressResponse = AddressResponse;

/* 배송지 목록 조회 */
export type GetAddressListResponse = AddressResponse;

/* 배송지 수정 */
export type ModifyAddressRequest = AddressRequest;
export type ModifyAddressResponse = AddressResponse;

/* 배송지 삭제 */
export interface DeleteAddressRequest {
  id: number;
}
