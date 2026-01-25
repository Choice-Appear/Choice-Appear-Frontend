import { SidebarOptions } from '@/features/sidebar/SidebarOptions';
import styles from './Sidebar.module.scss';
import { X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/shared/stores/authStore';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLogin, profileId, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    onClose();

    // 마이페이지, 위시리스트, 장바구니 페이지에서 로그아웃 시도 시 메인페이지로
    const redirectPages = ['/mypage', 'wishlist', 'mybasket'];

    // 의도치 않은 redirect를 방지하기 위해 includes 대신 startsWith 사용
    if (redirectPages.some(page => location.pathname.startsWith(page))) {
      navigate('/');
    }
  };

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
            {isLogin ? (
              <div>
                <Link
                  className={styles.link}
                  to={'/mypage'}
                  onClick={onClose}
                >
                  {profileId} 님
                </Link>
              </div>
            ) : (
              <Link
                className={styles.link}
                to={'/login'}
                onClick={onClose}
              >
                로그인
              </Link>
            )}
          </nav>
          <X
            className={styles.closeButton}
            onClick={onClose}
            aria-label="사이드바 닫기"
          />
        </header>
        <SidebarOptions onClose={onClose} />
        {isLogin && (
          <button
            className={styles.logout}
            onClick={handleLogout}
          >
            로그아웃
          </button>
        )}
      </aside>
    </>
  );
};
