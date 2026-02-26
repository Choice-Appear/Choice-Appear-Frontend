import type { FormEvent } from 'react';

interface LoginButtonProps {
  isPending: boolean;
  onClick: (e: FormEvent) => void;
}

export const LoginButton = ({ isPending, onClick }: LoginButtonProps) => {
  return (
    <button
      disabled={isPending}
      onClick={onClick}
      type="submit"
      id="login-btn"
    >
      {isPending ? '로그인 중...' : '로그인'}
    </button>
  );
};
