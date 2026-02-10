import styles from './Cap.module.scss';
import { ProductsButton } from '@/shared/ui/button';

export const Cap = () => {
  return (
    <section className={styles.container}>
      {/* 상품 이동 버튼 */}
      <ProductsButton />

      {/* 상품 목록 */}
    </section>
  );
};
