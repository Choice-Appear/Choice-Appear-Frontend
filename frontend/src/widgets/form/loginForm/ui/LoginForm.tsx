import { LoginButton } from '@/features/buttons';
import styles from './LoginForm.module.scss';
import type { ChangeEvent, FormEvent } from 'react';
import { SocialLogin } from '@/features/auth';

interface LoginFormData {
  profileId: string;
  password: string;
}

interface LoginFormProps {
  formData: LoginFormData;
  onFormDataChange: (data: LoginFormData) => void;
  saveId: boolean;
  onSaveIdChange: (checked: boolean) => void;
  isPending: boolean;
  onSubmit: (e: FormEvent) => void;
}

export const LoginForm = ({
  formData,
  onFormDataChange,
  saveId,
  onSaveIdChange,
  isPending,
  onSubmit,
}: LoginFormProps) => {
  const handleInputChange =
    (field: keyof LoginFormData) => (e: ChangeEvent<HTMLInputElement>) => {
      onFormDataChange({
        ...formData,
        [field]: e.target.value,
      });
    };
  return (
    <fieldset className={styles.fieldset}>
      <legend>Login</legend>

      {/* 아이디/비밀번호 입력 */}
      <label className={styles.id}>
        <input
          id="profileId"
          type="text"
          placeholder="아이디"
          value={formData.profileId}
          disabled={isPending}
          onChange={handleInputChange('profileId')}
        />
      </label>
      <label className={styles.password}>
        <input
          id="password"
          type="password"
          placeholder="비밀번호"
          value={formData.password}
          disabled={isPending}
          onChange={handleInputChange('password')}
        />
      </label>

      {/* 아이디 저장 옵션 버튼 */}
      <div className={styles.option}>
        <div>
          <input
            id="save-id"
            type="checkbox"
            checked={saveId}
            onChange={e => onSaveIdChange(e.target.checked)}
          />
          <label htmlFor="save-id">아이디 저장</label>
        </div>
      </div>

      {/* 로그인 버튼 */}
      <LoginButton
        isPending={isPending}
        onClick={onSubmit}
      />

      {/* 소셜로그인 */}
      <div className={styles.socialLogin}>
        <SocialLogin />
      </div>

      {/* 아이디/비밀번호 찾기 */}
      <div className={styles.memberFind}>
        <a href="">아이디 찾기</a>
        <a href="">비밀번호 찾기</a>
      </div>
    </fieldset>
  );
};
