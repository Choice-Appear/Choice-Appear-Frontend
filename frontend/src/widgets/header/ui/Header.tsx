import styles from './Header.module.scss';
import logo from '@/shared/assets/cna.jpg';
import { Search, UserRound, ShoppingCart } from '@/shared/icons';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown, type MenuProps } from 'antd';

export const Header = () => {
  const navigate = useNavigate();

  const goToMyPage = () => {
    navigate('/mypage');
  };

  const goToMyBasket = () => {
    navigate('/mybasket');
  };

  /* SHOP 드롭다운 */
  const shopMenuItems: MenuProps['items'] = [
    {
      key: 'men',
      label: <Link to={'/products/men'}>MEN</Link>,
    },
    {
      key: 'women',
      label: <Link to={'/products/women'}>WOMEN</Link>,
    },
    {
      key: 'cap',
      label: <Link to={'/products/cap'}>CAP</Link>,
    },
    {
      key: 'hoodie',
      label: <Link to={'/products/hoodie'}>HOODIE</Link>,
    },
  ];

  /* 커뮤니티 드롭다운 */
  const communityItems: MenuProps['items'] = [
    {
      key: 'notice',
      label: <Link to={'/notice'}>공지사항</Link>,
    },
    {
      key: 'qna',
      label: <Link to={'/qna'}>Q&A</Link>,
    },
    {
      key: 'diary',
      label: <Link to={'/notice'}>일기</Link>,
    },
  ];

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
            <Dropdown
              menu={{ items: shopMenuItems }}
              trigger={['hover']}
            >
              <Link
                to={'/'}
                className={styles.routing}
              >
                SHOP
              </Link>
            </Dropdown>
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
            <Dropdown
              menu={{ items: communityItems }}
              trigger={['hover']}
            >
              <Link
                to={'/notice'}
                className={styles.routing}
              >
                COMMUNITY
              </Link>
            </Dropdown>
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
