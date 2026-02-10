import { ProductsButton } from '@/shared/ui/button';
import styles from './Men.module.scss';

export const Men = () => {
  return (
    <section className={styles.container}>
      {/* 상품 이동 버튼 */}
      <ProductsButton />

      {/* 상품 목록 */}
    </section>
  );
};
