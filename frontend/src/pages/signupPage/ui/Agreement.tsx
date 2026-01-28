import styles from './Agreement.module.scss';
import { Button } from '@/shared/ui/button';
import { SignupHeader, TermsAgreement, useTermsAgreementStore } from '@/features/auth/signup';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Agreement = () => {
  const navigate = useNavigate();
  const { termsChecked } = useTermsAgreementStore();

  // 새로고침 시 alert 메시지
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // 취소 버튼 클릭 시 alert 메시지
  const handleCancel = () => {
    if (window.confirm('작성하신 내용이 사라집니다. 정말 취소하시겠습니까?')) {
      navigate('/');
    }
  };

  // 다음 버튼 클릭 시 라우팅
  const handleNext = () => {
    if (!termsChecked) {
      alert('필수 약관 동의가 필요합니다.');
      return;
    }
    navigate('/member/join');
  };

  return (
    <div className={styles.container}>
      {/* 회원가입 헤더 */}
      <SignupHeader currentStep={1} />

      {/* 약관 동의 체크박스 */}
      <TermsAgreement />

      {/* 취소/다음 버튼 */}
      <div className={styles.button}>
        <Button
          variant="cancel"
          onClick={handleCancel}
        >
          취소
        </Button>
        <Button
          variant="primary"
          onClick={handleNext}
        >
          다음
        </Button>
      </div>
    </div>
  );
};
