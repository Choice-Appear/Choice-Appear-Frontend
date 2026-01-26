import { create } from 'zustand';

interface TermsAgreementState {
  termsChecked: boolean;
  emailChecked: boolean;
  smsChecked: boolean;
  setTermsChecked: (checked: boolean) => void;
  setEmailChecked: (checked: boolean) => void;
  setSmsChecked: (checked: boolean) => void;
  setAllChecked: (checked: boolean) => void;
  reset: () => void;
}

export const useTermsAgreementStore = create<TermsAgreementState>(set => ({
  termsChecked: false,
  emailChecked: false,
  smsChecked: false,
  setTermsChecked: checked => set({ termsChecked: checked }),
  setEmailChecked: checked => set({ emailChecked: checked }),
  setSmsChecked: checked => set({ smsChecked: checked }),
  setAllChecked: checked =>
    set({
      termsChecked: checked,
      emailChecked: checked,
      smsChecked: checked,
    }),
  reset: () =>
    set({
      termsChecked: false,
      emailChecked: false,
      smsChecked: false,
    }),
}));
