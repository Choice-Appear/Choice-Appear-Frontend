import { SocialLogin } from '@/features';
import styles from './LoginPage.module.scss';
import { useEffect, useState, type FormEvent } from 'react';
import { useLogin } from '@/features/auth/hooks';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    profileId: '',
    password: '',
  });

  const [saveId, setSaveId] = useState(false);

  const { mutate: login, isPending } = useLogin();

  // 저장된 아이디 불러오기
  useEffect(() => {
    const saveId = localStorage.getItem('saveId');
    if (saveId) {
      setFormData(prev => ({ ...prev, profileId: saveId }));
      setSaveId(true);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // 입력 오류 처리
    // if (!formData.profileId) {
    //   alert('아이디를 입력해주세요.');
    //   return;
    // }

    // if (!formData.password) {
    //   alert('비밀번호를 입력해주세요');
    //   return;
    // }

    // 아이디 저장
    if (saveId) {
      localStorage.setItem('saveId', formData.profileId);
    } else {
      localStorage.removeItem('saveId');
    }

    // 로그인 요청
    login(formData);
  };

  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend>Login</legend>
          {/* 아이디/비밀번호 입력 */}
          <label className={styles.id}>
            <input
              id="profileId"
              type="text"
              placeholder="아이디"
              value={formData.profileId}
              onChange={e =>
                setFormData(prev => ({
                  ...prev,
                  profileId: e.target.value,
                }))
              }
            />
          </label>
          <label className={styles.password}>
            <input
              id="password"
              type="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={e =>
                setFormData(prev => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </label>

          {/* 아이디 저장 옵션 버튼 */}
          <div className={styles.option}>
            <div>
              <input
                id="save-id"
                type="checkbox"
                checked={saveId}
                onChange={(e) => setSaveId(e.target.checked)}
              />
              <label htmlFor="save-id">아이디 저장</label>
            </div>
          </div>

          {/* 로그인 버튼 */}
          <button
            onClick={handleSubmit}
            type="submit"
            id="login-btn"
          >
            로그인
          </button>

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
      </form>
    </main>
  );
};

export default LoginPage;
