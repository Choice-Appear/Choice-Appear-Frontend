export interface LoginRequest {
  profileId: string;
  password: string;
}

export interface LoginResponse {
  grantType: string;
  accessToken: string;
  accessTokenExpiresAt: number;
  nickname: string;
}
