import { SocialLoginButton } from '@/shared/ui';
import styles from './SocialLogin.module.scss';

// 소셜로그인 리다이렉트 주소
// const SOCIAL_LOGIN_URLS = {
//   kakao: `${import.meta.env.VITE_API_URL}/oauth2/authorization/kakao`,
//   naver: `${import.meta.env.VITE_API_URL}/oauth2/authorization/naver`,
//   google: `${import.meta.env.VITE_API_URL}/oauth2/authorization/google`,
// } as const;

export const SocialLogin = () => {
  return (
    <div className={styles.socialLoginContainer}>
      <SocialLoginButton
        provider="kakao"
        // href={SOCIAL_LOGIN_URLS.kakao}
      />
      <SocialLoginButton
        provider="naver"
        // href={SOCIAL_LOGIN_URLS.naver}
      />
      <SocialLoginButton
        provider="google"
        // href={SOCIAL_LOGIN_URLS.google}
      />
    </div>
  );
};
