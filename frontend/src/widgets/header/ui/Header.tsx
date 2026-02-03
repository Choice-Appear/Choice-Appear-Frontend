import styles from './Header.module.scss';
import logo from '@/shared/assets/cna.jpg';
import { Menu, Search, UserRound, ShoppingCart } from '@/shared/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '@/widgets/sidebar';

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();

  const goToMyPage = () => {
    navigate('/mypage');
  };

  const goToMyBasket = () => {
    navigate('/mybasket');
  };

  const goToHome = () => {
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={styles.container}>
        {/* 좌측 사이드바 */}
        <div>
          <Menu
            className={styles.menu}
            onClick={toggleSidebar}
          />
        </div>

        {/* 로고 */}
        <div>
          <img
            className={styles.logo}
            onClick={goToHome}
            src={logo}
            alt="로고"
          />
        </div>

        {/* 우측 버튼 */}
        <div className={styles.routing}>
          <Search />

          <UserRound
            className={styles.hideOnMobile}
            onClick={goToMyPage}
          />
          <ShoppingCart
            className={styles.hideOnMobile}
            onClick={goToMyBasket}
          />
        </div>
      </div>

      {/* 사이드바 */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};
