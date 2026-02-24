import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const AuthGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<{ redirectTo: string }>;
      const redirectTo = customEvent.detail?.redirectTo || '/';

      navigate(`/login?redirect=${redirectTo}`, { replace: true });
    };

    window.addEventListener('unauthorized', handler);
    return () => window.removeEventListener('unauthorized', handler);
  }, [navigate]);

  return <Outlet />;
};

export default AuthGuard;
