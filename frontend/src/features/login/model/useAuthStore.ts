import { getCookie, removeCookie, setCookie } from '@/shared/lib/cookie';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthStore {
  isLogin: boolean;
  profileId: string | null;
  nickname: string | null;
  login: (
    profileId: string,
    nickname: string,
    token: string,
    expiresAt: number
  ) => void;
  logout: () => void;
  getToken: () => string | null;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      isLogin: false,
      profileId: null,
      nickname: null,

      // 로그인
      login: (
        profileId: string,
        nickname: string,
        token: string,
        expiresAt: number
      ) => {
        // Zustand 업데이트
        set({ isLogin: true, profileId, nickname });

        // 쿠키에 토큰 저장
        const expiresDate = new Date(expiresAt);
        setCookie('accessToken', token, { expires: expiresDate });
      },

      // 로그아웃
      logout: () => {
        // Zustand state 초기화
        set({ isLogin: false, profileId: null, nickname: null });

        // 쿠키에서 토큰 삭제
        removeCookie('accessToken');
      },

      // 토큰 가져오기
      getToken: () => {
        return getCookie('accessToken');
      },
    }),
    {
      name: 'auth-storage', // localStorage key
    }
  )
);
