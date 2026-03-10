import { getCookie, removeCookie, setCookie } from '@/shared/lib/cookie';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authApi } from '../api/authApi';

interface AuthStore {
  isLogin: boolean;
  isAuthReady: boolean;
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
  initAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      isLogin: false,
      isAuthReady: false,
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
        setCookie('accessToken', token, { expires: new Date(expiresAt) });
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

      //
      initAuth: async () => {
        const token = getCookie('accessToken');

        if (token) {
          set({ isLogin: true, isAuthReady: true });
          return;
        }

        try {
          const { data } = await authApi.refresh();
          set({ isLogin: true, isAuthReady: true, nickname: data.nickname });
          setCookie('accessToken', data.accessToken, {
            expires: new Date(data.accessTokenExpiresAt),
          });
        } catch {
          set({
            isLogin: false,
            profileId: null,
            nickname: null,
            isAuthReady: true,
          });
          removeCookie('accessToken');
        }
      },
    }),
    {
      name: 'auth-storage', // localStorage key
      partialize: state => ({
        profileId: state.profileId,
        nickname: state.nickname,
      }),
    }
  )
);
