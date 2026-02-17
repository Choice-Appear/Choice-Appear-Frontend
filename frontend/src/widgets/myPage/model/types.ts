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
