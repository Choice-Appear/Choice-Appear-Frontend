import styles from './SignupDone.module.scss';
import { SignupHeader } from '@/features/signup';
import { SignupResult } from '@/features/signup/ui/SignupResult';
import { Button } from '@/shared/ui/button';
import { useNavigate } from 'react-router-dom';

export const SignupDone = () => {
  const navigate = useNavigate();

  const handleMain = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      {/* 회원가입 완료 헤더 */}
      <SignupHeader currentStep={3} />

      {/* 가입 정보 카드 */}
      <SignupResult />

      {/* 메인으로 버튼 */}
      <div className={styles.button}>
        <Button
          variant="primary"
          onClick={handleMain}
        >
          메인으로
        </Button>
      </div>
    </div>
  );
};
