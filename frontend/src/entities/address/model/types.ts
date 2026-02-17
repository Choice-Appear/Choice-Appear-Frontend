/* 배송지 추가 */
export interface AddAddressRequest {
  name: string;
  recipient: string;
  address: string;
  cellPhoneNumber: string;
  generalPhoneNumber: string;
  isPrimary: boolean;
}

export interface AddAddressResponse {
  id: number;
  name: string;
  recipient: string;
  address: string;
  cellPhoneNumber: string;
  generalPhoneNumber: string;
  isPrimary: boolean;
}

/* 배송지 목록 조회 */
export interface getAddressList {
  id: number;
  name: string;
  recipient: string;
  address: string;
  cellPhoneNumber: string;
  generalPhoneNumber: string;
  isPrimary: boolean;
}

/* 배송지 수정 */
export interface ModifyAddressRequest {
  name: string;
  recipient: string;
  address: string;
  cellPhoneNumber: string;
  generalPhoneNumber: string;
  isPrimary: boolean;
}

export interface ModifyAddressResponse {
  id: number;
  name: string;
  recipient: string;
  address: string;
  cellPhoneNumber: string;
  generalPhoneNumber: string;
  isPrimary: boolean;
}

/* 배송지 삭제 */
export interface DeleteAddressRequest {
  id: number;
}