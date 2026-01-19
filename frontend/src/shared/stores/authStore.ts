import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthStore {
  isLogin: boolean;
  profileId: string | null;
  token: string | null;
  login: (profileId: string, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      isLogin: false,
      profileId: null,
      token: null,

      // 로그인
      login: (profileId: string, token: string) => {
        set({ isLogin: true, profileId, token });
        localStorage.setItem('token', token);
      },

      // 로그아웃
      logout: () => {
        set({ isLogin: false, profileId: null, token: null });
        localStorage.removeItem('token');
      },
    }),
    {
      name: 'auth-storage',  // localStorage key
      partialize: state => ({
        profileId: state.profileId,
        isLogin: state.isLogin,
      }),
    }
  )
);
