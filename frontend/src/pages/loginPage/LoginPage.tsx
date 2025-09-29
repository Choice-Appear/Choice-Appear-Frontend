import { SocialLogin } from '@/features';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend>Login</legend>
          {/* 아이디/비밀번호 입력 */}
          <label className={styles.id}>
            <input
              id="member-id"
              type="text"
              placeholder="아이디"
            />
          </label>
          <label className={styles.password}>
            <input
              id="member-pw"
              type="password"
              placeholder="비밀번호"
            />
          </label>

          {/* 아이디 저장 옵션 버튼 */}
          <div className={styles.option}>
            <div>
              <input
                id="save-id"
                type="checkbox"
              />
              <label htmlFor="save-id">아이디 저장</label>
            </div>
          </div>

          {/* 로그인 버튼 */}
          <button
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
