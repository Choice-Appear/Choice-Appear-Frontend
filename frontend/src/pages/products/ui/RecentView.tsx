import styles from './RecentView.module.scss';
import { UserNavigation } from '@/features/myPageNavigation';
import { UserViewProducts } from '@/features/products';

export const RecentView = () => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <UserNavigation />

        <div>
          <h2>최근 본 상품</h2>

          {/* 최근 본 상품 목록 */}
          <UserViewProducts />

          {/* 페이지네이션 */}
        </div>
      </section>
    </div>
  );
};
