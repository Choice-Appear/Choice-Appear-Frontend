import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Outlet />
      </main>
    </div>
  );
}
