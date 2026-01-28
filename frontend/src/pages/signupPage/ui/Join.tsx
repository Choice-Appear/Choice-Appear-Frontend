import { Button } from '@/shared/ui/button';
import styles from './Join.module.scss';
import {
  SignupForm,
  SignupHeader,
  useSignupStore,
} from '@/features/auth/signup';
import { useNavigate } from 'react-router-dom';

export const Join = () => {
  const navigate = useNavigate();
  const { getFullPhoneNumber } = useSignupStore();

  // 이전 버튼 클릭 시
  const handleBack = () => {
    navigate('/member/agreement');
  };

  const handleSignupSubmit = () => {
    // Store에서 폼 데이터 가져오기
    const formData = useSignupStore.getState();

    // API 호출을 위한 데이터 구성
    const submitData = {
      profileId: formData.profileId,
      password: formData.password,
      nickname: formData.nickname,
      email: formData.email,
      cellPhoneNumber: getFullPhoneNumber(),
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
