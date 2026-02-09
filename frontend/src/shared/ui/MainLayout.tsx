import styles from './MainLayout.module.scss';
import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className={styles.layoutMain}>
        <Outlet />
      </main>
    </>
  );
}
