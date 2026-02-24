import { getCookie } from '@/shared/lib/cookie';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
  const location = useLocation();
  const token = getCookie('accessToken');

  if (!token) {
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
