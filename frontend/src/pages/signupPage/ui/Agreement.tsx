import styles from './Agreement.module.scss';
import { SignupHeader } from '@/features/auth/signup';

export const Agreement = () => {
  return (
    <div className={styles.container}>
      {/* 회원가입 헤더 */}
      <SignupHeader currentStep={1} />

      {/* 약관 동의 체크박스 */}
    </div>
  );
};
