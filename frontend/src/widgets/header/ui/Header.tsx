import styles from './Header.module.scss';
import {
  Menu,
  Search,
  Bookmark,
  UserRound,
  ShoppingCart,
  ClipboardList,
} from '@/shared/icons';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Sidebar } from '@/widgets/sidebar';

interface HeaderProps {
  hideHeader?: boolean;
}

export const Header = ({ hideHeader = false }: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(!hideHeader);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [allowAnimation, setAllowAnimation] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isInitialLoad = useRef(true);

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

  const goToBoard = () => {
    navigate('/notice');
  };

  /* 모바일 화면 감지 */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /* 페이지 변경 시 isVisible 상태 초기화 */
  useEffect(() => {
    isInitialLoad.current = true;
    setAllowAnimation(false);

    // Mobile 환경 - 항상 헤더 보이기
    if (isMobile) {
      setIsVisible(true);

      // 메인 페이지로 돌아왈 때 스크롤 위치 복원
      if (isMainPage) {
        const savedScrollY = sessionStorage.getItem('mainPageScrollY');
        if (savedScrollY) {
          const scrollY = parseInt(savedScrollY);
          setTimeout(() => {
            window.scrollTo(0, scrollY);
          }, 0);
        }
      }

      const timer = setTimeout(() => {
        isInitialLoad.current = false;
        setAllowAnimation(true);
      }, 50);

      return () => clearTimeout(timer);
    }

    // Desktop 환경 - 헤더 숨김 로직
    if (hideHeader) {
      const savedScrollY = sessionStorage.getItem('mainPageScrollY');
      const scrollY = savedScrollY ? parseInt(savedScrollY) : 0;

      setIsVisible(scrollY > 0);

      // 저장된 스크롤 위치로 복원
      if (scrollY > 0) {
        setTimeout(() => {
          window.scrollTo(0, scrollY);
        }, 0);
      }

      // 초기 로딩 완료 후 애니메이션 허용
      const timer = setTimeout(() => {
        isInitialLoad.current = false;
        setAllowAnimation(true);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
      // 다른 페이지에서는 바로 애니메이션 허용
      const timer = setTimeout(() => {
        isInitialLoad.current = false;
        setAllowAnimation(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [hideHeader, location.pathname, isMobile, isMainPage]);

  /* 스크롤 이벤트 핸들러 */
  useEffect(() => {
    if (!isMainPage) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Desktop 환경에서만 헤더 visible 상태 변경
      if (!isMobile && hideHeader) {
        if (currentScrollY > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }

      // 메인 페이지 스크롤 위치 저장 (모바일 / 데스크톱 공통)
      sessionStorage.setItem('mainPageScrollY', currentScrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideHeader, isMobile, isMainPage]);

  /* 좌측 사이드바 설정 */
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header
        className={`${styles.header} ${
          isMainPage ? styles.mainPage : styles.otherPage
        } ${isVisible ? styles.visible : ''} ${
          !allowAnimation ? styles.noAnimation : ''
        } ${isMobile ? styles.mobile : ''}`}
      >
        {/* 좌측 사이드바 */}
        <div>
          <Menu
            className={styles.menu}
            onClick={toggleSidebar}
          />
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
          <Bookmark
            className={styles.hideOnMobile}
            onClick={goToWishlist}
          />
          <UserRound
            className={styles.hideOnMobile}
            onClick={goToMyPage}
          />
          <ShoppingCart
            className={styles.hideOnMobile}
            onClick={goToMyBasket}
          />
          <ClipboardList onClick={goToBoard} />
        </div>
      </header>

      {/* 사이드바 */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};
