import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const AuthGuard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<{ redirectTo: string }>;
      const redirectTo = customEvent.detail?.redirectTo || '/';

      // 이미 로그인 페이지 접근 시
      if (location.pathname === '/login') return;

      navigate(`/login?redirect=${redirectTo}`, { replace: true });
    };

    window.addEventListener('unauthorized', handler);
    return () => window.removeEventListener('unauthorized', handler);
  }, [navigate, location.pathname]);

  return <Outlet />;
};

export default AuthGuard;
