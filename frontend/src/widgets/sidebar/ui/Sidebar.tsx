import styles from './Sidebar.module.scss';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
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
            <span>로그인</span>
          </nav>
          <p
            className={styles.closeButton}
            onClick={onClose}
            aria-label="사이드바 닫기"
          >
            X
          </p>
        </header>
      </aside>
    </>
  );
};

export default Sidebar;
