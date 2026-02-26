import styles from './MemberInfo.module.scss';
import { Button } from '@/shared/ui/button';
import { SignupForm } from '@/features/signup';

export const MemberInfo = () => {
  return (
    <div className={styles.container}>
      {/* 타이틀 */}
      <div>
        <h1 className={styles.title}>회원 정보 수정</h1>
      </div>

      {/* 회원정보 수정 폼 */}
      <SignupForm />

      {/* 이전/가입완료 버튼 */}
      <div className={styles.button}>
        <Button
          type="button"
          variant="cancel"
        >
          취소
        </Button>
        <Button variant="primary">회원정보 수정</Button>
      </div>
    </div>
  );
};
