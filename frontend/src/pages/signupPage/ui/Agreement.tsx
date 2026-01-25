import { Button } from '@/shared/ui/button';
import styles from './Agreement.module.scss';
import { SignupHeader, TermsAgreement } from '@/features/auth/signup';
import { useNavigate } from 'react-router-dom';

export const Agreement = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    if (window.confirm('작성하신 내용이 사라집니다. 정말 취소하시겠습니까?'))
      navigate('/');
  };

  const handleNext = () => {
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
