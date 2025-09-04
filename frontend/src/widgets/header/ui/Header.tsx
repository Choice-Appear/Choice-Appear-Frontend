import styles from './Header.module.scss';
import { Menu } from 'lucide-react';
import { Search } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

export const Header = () => {
  return (
    <header className={styles.header}>
      {/* 좌측 사이드바 */}
      <div>
        <Menu className={styles.menu} />
      </div>

      {/* 로고 */}
      <div>
        <p className={styles.logo}>로고</p>
      </div>

      {/* 우측 버튼 */}
      <div className={styles.routing}>
        <Search />
        <Bookmark />
        <UserRound />
        <ShoppingCart />
      </div>
    </header>
  );
};
