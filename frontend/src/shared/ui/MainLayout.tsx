import { Header } from '@/widgets/header';
import { Outlet, useLocation } from 'react-router-dom';

export default function MainLayout() {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <div>
      <Header hideHeader={isMainPage} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
