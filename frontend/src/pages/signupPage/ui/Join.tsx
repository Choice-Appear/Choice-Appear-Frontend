import { Button } from '@/shared/ui/button';
import styles from './Join.module.scss';
import { SignupForm, SignupHeader } from '@/features/auth/signup';
import { useNavigate } from 'react-router-dom';

export const Join = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/member/agreement');
  };

  return (
    <div className={styles.container}>
      {/* 회원가입 헤더 */}
      <SignupHeader currentStep={2} />

      {/* 사용자 정보 입력 폼 */}
      <SignupForm />

      {/* 이전/가입완료 버튼 */}
      <div className={styles.button}>
        <Button variant="cancel" onClick={handleBack}>이전</Button>
        <Button variant="primary">가입 완료</Button>
      </div>
    </div>
  );
};
