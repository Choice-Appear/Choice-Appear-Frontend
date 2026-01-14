import { SidebarOptions } from '@/features/sidebar/SidebarOptions';
import styles from './Sidebar.module.scss';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* 배경 오버레이 */}
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={onClose}
        />
      )}

      {/* 사이드바 */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        {/* 헤더 */}
        <header className={styles.header}>
          <nav className={styles.login}>
            <Link className={styles.link} to={'/login'}>로그인</Link>
          </nav>
          <X
            className={styles.closeButton}
            onClick={onClose}
            aria-label="사이드바 닫기"
          />
        </header>
        <SidebarOptions />
      </aside>
    </>
  );
};
