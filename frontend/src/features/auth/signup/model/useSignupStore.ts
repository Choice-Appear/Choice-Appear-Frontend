import { create } from 'zustand';

interface SignupForm {
  profileId: string;
  password: string;
  passwordCheck: string;
  nickname: string;
  email: string;
  phone: {
    prefix: string;
    middle: string;
    last: string;
  };
}

interface SignupStore extends SignupForm {
  // setter 함수
  setProfileId: (id: string) => void;
  setPassword: (password: string) => void;
  setPasswordCheck: (passwordCheck: string) => void;
  setNickname: (nickname: string) => void;
  setEmail: (email: string) => void;
  setPhonePrefix: (prefix: string) => void;
  setPhoneMiddle: (middle: string) => void;
  setPhoneLast: (last: string) => void;

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
  email: '',
  phone: {
    prefix: '010',
    middle: '',
    last: '',
  },
};

export const useSignupStore = create<SignupStore>((set, get) => ({
  // 초기 상태
  ...initialState,

  // Setter 함수
  setProfileId: id => set({ profileId: id }),

  setPassword: password => set({ password }),

  setPasswordCheck: passwordCheck => set({ passwordCheck }),

  setNickname: nickname => set({ nickname }),

  setEmail: email => set({ email }),

  setPhonePrefix: prefix =>
    set(state => ({
      phone: { ...state.phone, prefix },
    })),

  setPhoneMiddle: middle =>
    set(state => ({
      phone: { ...state.phone, middle },
    })),

  setPhoneLast: last =>
    set(state => ({
      phone: { ...state.phone, last },
    })),

  // 폼 초기화
  resetForm: () => set(initialState),

  getFullPhoneNumber: () => {
    const { phone } = get();
    return `${phone.prefix}-${phone.middle}-${phone.last}`;
  },
}));
