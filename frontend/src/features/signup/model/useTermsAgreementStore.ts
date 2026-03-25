import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TermsAgreementState {
  smsChecked: boolean;
  emailChecked: boolean;
  privacyChecked: boolean;
  termsChecked: boolean;
  setSmsChecked: (checked: boolean) => void;
  setEmailChecked: (checked: boolean) => void;
  setPrivacyChecked: (checked: boolean) => void;
  setTermsChecked: (checked: boolean) => void;
  setAllChecked: (checked: boolean) => void;
  reset: () => void;
}

export const useTermsAgreementStore = create<TermsAgreementState>()(
  persist(
    set => ({
      smsChecked: false,
      emailChecked: false,
      privacyChecked: false,
      termsChecked: false,
      setSmsChecked: checked => set({ smsChecked: checked }),
      setEmailChecked: checked => set({ emailChecked: checked }),
      setPrivacyChecked: checked => set({ privacyChecked: checked }),
      setTermsChecked: checked => set({ termsChecked: checked }),
      setAllChecked: checked =>
        set({
          smsChecked: checked,
          emailChecked: checked,
          privacyChecked: checked,
          termsChecked: checked,
        }),
      reset: () => {
        useTermsAgreementStore.persist.clearStorage(); // 스토리지 먼저 삭제

        // 상태 초기화
        set({
          smsChecked: false,
          emailChecked: false,
          privacyChecked: false,
          termsChecked: false,
        });
      },
    }),
    {
      name: 'terms-agreement-storage', // localStorage 키 이름
    }
  )
);
