import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SignupForm {
  profileId: string;
  password: string;
  passwordCheck: string;
  nickname: string;
  birthDate: string;
  email: string;
  mobilePhone: {
    prefix: string;
    middle: string;
    last: string;
  };
  telephone: string;
}

interface SignupStore extends SignupForm {
  // setter 함수
  setProfileId: (id: string) => void;
  setPassword: (password: string) => void;
  setPasswordCheck: (passwordCheck: string) => void;
  setNickname: (nickname: string) => void;
  setBirthDate: (birthDate: string) => void;
  setEmail: (email: string) => void;
  setPhonePrefix: (prefix: string) => void;
  setPhoneMiddle: (middle: string) => void;
  setPhoneLast: (last: string) => void;
  setTelephone: (telephone: string) => void;

  // 유틸리티 함수
  resetForm: () => void;
  getFullPhoneNumber: () => string;
}

// 초기값 정의
const initialState: SignupForm = {
  profileId: '',
  password: '',
  passwordCheck: '',
  nickname: '',
  birthDate: '',
  email: '',
  mobilePhone: {
    prefix: '010',
    middle: '',
    last: '',
  },
  telephone: '',
};

export const useSignupStore = create<SignupStore>()(
  persist(
    (set, get) => ({
      // 초기 상태
      ...initialState,

      // Setter 함수
      setProfileId: id => set({ profileId: id }),

      setPassword: password => set({ password }),

      setPasswordCheck: passwordCheck => set({ passwordCheck }),

      setNickname: nickname => set({ nickname }),

      setBirthDate: birthDate => set({ birthDate }),

      setEmail: email => set({ email }),

      setPhonePrefix: prefix =>
        set(state => ({
          mobilePhone: { ...state.mobilePhone, prefix },
        })),

      setPhoneMiddle: middle =>
        set(state => ({
          mobilePhone: { ...state.mobilePhone, middle },
        })),

      setPhoneLast: last =>
        set(state => ({
          mobilePhone: { ...state.mobilePhone, last },
        })),

      setTelephone: telephone => set({ telephone }),

      // 폼 초기화
      resetForm: () => {
        useSignupStore.persist.clearStorage();  // 스토리지 삭제 먼저
        set(initialState);  // 상태 초기화
      },

      getFullPhoneNumber: () => {
        const { mobilePhone } = get();
        return `${mobilePhone.prefix}${mobilePhone.middle}${mobilePhone.last}`;
      },
    }),
    {
      name: 'signup-form-storage', // localStorage 키 이름
    }
  )
);
