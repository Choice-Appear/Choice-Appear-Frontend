import styles from './SignupDone.module.scss';
import { SignupHeader } from '@/features/auth/signup';
import { SignupResult } from '@/features/auth/signup/ui/SignupResult';
import { Button } from '@/shared/ui/button';

export const SignupDone = () => {
  return (
    <div className={styles.container}>
      {/* 회원가입 완료 헤더 */}
      <SignupHeader currentStep={3} />

      {/* 가입 정보 카드 */}
      <SignupResult />

      {/* 메인으로 버튼 */}
      <div className={styles.button}>
        <Button variant="primary">메인으로</Button>
      </div>
    </div>
  );
};
