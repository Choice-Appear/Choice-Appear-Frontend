/* 회원 정보 수정 */
// 최초 GET 요청 결과
export interface MyInformationResponse {
  id: number;
  profileId: string;
  nickname: string;
  birthDate: string;
  email: string;
  provider: string;
  cellPhoneNumber: string;
  generalPhoneNumber: string;
  smsAgreement: boolean;
  emailAgreement: boolean;
}

// 수정 요청/응답
export interface ModifyMyInformation {
  nickname: string;
  birthDate: string;
  cellPhoneNumber: string;
  generalPhoneNumber: string;
  smsAgreement: boolean;
  emailAgreement: boolean;
}

export type ModifyMyInfoRequest = ModifyMyInformation;
export type ModifyMyInfoResponse = ModifyMyInformation;

/* 주문 내역 */
export type OrderTab = 'order' | 'cancel';

/* 배송 주소록 */
// 배송지 목록 조회
export interface MyAddressListResponse {
  id: number;
  name: string;
  address: string;
  recipient: string;
  cellPhoneNumber: string;
  generalPhoneNumber: string;
  isPrimary: boolean;
}

// 배송지 수정
export interface ModifyMyAddressRequest {
  name: string;
  address: string;
  recipient: string;
  cellPhoneNumber: string;
  generalPhoneNumber: string;
  isPrimary: boolean;
}

export interface ModifyMyAddressResponse {
  id: number;
  name: string;
  address: string;
  recipient: string;
  cellPhoneNumber: string;
  generalPhoneNumber: string;
  isPrimary: boolean;
}

// 배송지 삭제 & 기본 배송지 설정
export interface AddressDetail {
  address: string;
}

export type DeleteAddressRequest = AddressDetail;
export type SetPrimaryAddress = AddressDetail;

// 배송지 등록
export interface AddMyAddress {
  name: string;
  address: string;
  recipient: string;
  cellPhoneNumber: string;
  generalPhoneNumber: string;
  isPrimary: boolean;
}
