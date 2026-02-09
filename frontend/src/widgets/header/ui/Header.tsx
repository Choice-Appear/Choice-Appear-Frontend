import styles from './Header.module.scss';
import logo from '@/shared/assets/cna.jpg';
import { Search, UserRound, ShoppingCart } from '@/shared/icons';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const goToMyPage = () => {
    navigate('/mypage');
  };

  const goToMyBasket = () => {
    navigate('/mybasket');
  };

  return (
    <header>
      <nav className={styles.container}>
        {/* 좌측 로고 */}
        <h1 className={styles.logoWrapper}>
          <Link to={'/'}>
            <img
              src={logo}
              alt="로고"
              className={styles.logo}
            />
          </Link>
        </h1>

        {/* 메인 서비스 라우팅 */}
        <ul className={styles.linkList}>
          <li>
            <Link
              to={'/'}
              className={styles.routing}
            >
              BRAND
            </Link>
          </li>
          <li>
            <Link
              to={'/'}
              className={styles.routing}
            >
              SHOP
            </Link>
          </li>
          <li>
            <Link
              to={'/'}
              className={styles.routing}
            >
              JOURNAL
            </Link>
          </li>
          <li>
            <Link
              to={'/'}
              className={styles.routing}
            >
              COMMUNITY
            </Link>
          </li>
        </ul>

        {/* 우측 버튼 */}
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.iconButton}
          >
            <Search />
          </button>
          <button
            type="button"
            onClick={goToMyPage}
            className={styles.iconButton}
          >
            <UserRound />
          </button>
          <button
            type="button"
            onClick={goToMyBasket}
            className={styles.iconButton}
          >
            <ShoppingCart />
          </button>
        </div>
      </nav>
    </header>
  );
};
