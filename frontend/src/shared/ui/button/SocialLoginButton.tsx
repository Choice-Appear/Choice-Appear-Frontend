interface Props {
  provider: 'kakao' | 'naver' | 'google';
  // href: string;
}

const SOCIAL_IMAGES = {
  kakao: '/src/shared/assets/socialLogin/kakaoLogin.png',
  naver: '/src/shared/assets/socialLogin/naverLogin.png',
  google: 'src/shared/assets/socialLogin/googleLogin.png',
} as const;

export const SocialLoginButton = ({ provider }: Props) => {
  return (
    <a
      // href={href}
      className="social-login-button"
    >
      <img
        src={SOCIAL_IMAGES[provider]}
        alt={`${provider} 로그인`}
      />
    </a>
  );
};
