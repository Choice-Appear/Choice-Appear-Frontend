export interface SignupRequest {
  profileId: string;
  nickname: string;
  password: string;
  email: string;
  cellPhoneNumber: string;
  generalPhoneNumber: string;
  smsAgreement: boolean;
  emailAgreement: boolean;
  privacyAgreement: boolean;
  termsAgreement: boolean;
}

export interface SignupResponse {
  id: number;
  profileId: string;
  email: string;
  createdAt: string;
}
