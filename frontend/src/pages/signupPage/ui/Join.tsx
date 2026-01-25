import styles from './Join.module.scss';
import { SignupHeader } from '@/features/auth/signup';

export const Join = () => {
  return (
    <div className={styles.container}>
      {/* 회원가입 헤더 */}
      <SignupHeader currentStep={2} />

      {/* 약관 동의 체크박스 */}
    </div>
  );
};
