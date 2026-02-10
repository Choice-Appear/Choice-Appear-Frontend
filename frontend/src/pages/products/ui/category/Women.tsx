import { ProductsButton } from '@/shared/ui/button';
import styles from './Women.module.scss';

export const Women = () => {
  return (
    <section className={styles.container}>
      {/* 상품 이동 버튼 */}
      <ProductsButton />

      {/* 상품 목록 */}
    </section>
  );
};
