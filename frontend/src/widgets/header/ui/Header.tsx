import styles from './Header.module.scss';
import { Menu } from 'lucide-react';
import { Search } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  hideHeader?: boolean;
}

export const Header = ({ hideHeader = false }: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(!hideHeader);

  const location = useLocation();
  const isMainPage = location.pathname === '/';

  /* 클릭에 따른 라우팅 설정 */
  const navigate = useNavigate();

  const goToWishlist = () => {
    navigate('/wishlist');
  };

  const goToMyPage = () => {
    navigate('/mypage');
  };

  const goToMyBasket = () => {
    navigate('/mybasket');
  };

  const goToHome = () => {
    navigate('/');
  };

  /* 훅 설정 */
  useEffect(() => {
    if (!hideHeader) return;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideHeader]);

  return (
    <header
      className={`${styles.header} ${
        isMainPage ? styles.mainPage : styles.otherPage
      } ${isVisible ? styles.visible : ''}`}
    >
      {/* 좌측 사이드바 */}
      <div>
        <Menu className={styles.menu} />
      </div>

      {/* 로고 */}
      <div>
        <p
          className={styles.logo}
          onClick={goToHome}
        >
          로고
        </p>
      </div>

      {/* 우측 버튼 */}
      <div className={styles.routing}>
        <Search />
        <Bookmark onClick={goToWishlist} />
        <UserRound onClick={goToMyPage} />
        <ShoppingCart onClick={goToMyBasket} />
      </div>
    </header>
  );
};
