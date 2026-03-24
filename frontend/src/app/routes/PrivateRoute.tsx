import { useAuthStore } from '@/features/login';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
  const location = useLocation();
  const { isLogin, isLogout, isAuthReady } = useAuthStore();

  /* 앱 초기화(토큰 검증) 전 */
  if (!isAuthReady) {
    return null;
  }

  /* 인증되지 않은 사용자 접근 차단 */
  if (!isLogin) {
    if (isLogout) {
      return <Navigate to={'/'} />;
    }
    return (
      <Navigate
        to={`/login?redirect=${location.pathname}`}
        replace
      />
    );
  }

  return <Outlet />;
};

export default PrivateRoute;
