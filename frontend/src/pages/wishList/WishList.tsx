import styles from './WishList.module.scss';
import { UserViewProducts } from '@/features/products';
import { UserNavigation } from '@/widgets/myPage';

const WishList = () => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <UserNavigation />

        <div>
          <h2>위시리스트</h2>

          {/* 위시리스트 상품 목록 */}
          <UserViewProducts />

          {/* 삭제/전체주문 버튼 */}
        </div>
      </section>
    </div>
  );
};

export default WishList;
