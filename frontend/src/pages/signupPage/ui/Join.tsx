import styles from './Join.module.scss';
import { Button } from '@/shared/ui/button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  SignupForm,
  SignupHeader,
  useSignupStore,
  useTermsAgreementStore,
} from '@/features/signup';

export const Join = () => {
  const navigate = useNavigate();
  const { getFullPhoneNumber } = useSignupStore();

  // 새로고침 시 alert
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // 이전 버튼 클릭 시
  const handleBack = () => {
    navigate('/member/agreement');
  };

  const handleSignupSubmit = () => {
    // Store에서 폼 데이터 가져오기
    const agreementData = useTermsAgreementStore.getState();
    const formData = useSignupStore.getState();

    // API 호출을 위한 데이터 구성
    const submitData = {
      profileId: formData.profileId,
      nickname: formData.nickname,
      password: formData.password,
      birthDate: formData.birthDate,
      email: formData.email,
      cellPhoneNumber: getFullPhoneNumber(),
      generalPhoneNumber: formData.telephone,
      
      smsAgreement: agreementData.smsChecked,
      emailAgreement: agreementData.emailChecked,
      privacyAgreement: agreementData.privacyChecked,
      termsAgreement: agreementData.termsChecked,
    };

    console.log('회원가입 제출 데이터: ', submitData);
  };

  return (
    <div className={styles.container}>
      {/* 회원가입 헤더 */}
      <SignupHeader currentStep={2} />

      {/* 사용자 정보 입력 폼 */}
      <SignupForm />

      {/* 이전/가입완료 버튼 */}
      <div className={styles.button}>
        <Button
          type="button"
          variant="cancel"
          onClick={handleBack}
        >
          이전
        </Button>
        <Button
          variant="primary"
          onClick={handleSignupSubmit}
        >
          가입 완료
        </Button>
      </div>
    </div>
  );
};
