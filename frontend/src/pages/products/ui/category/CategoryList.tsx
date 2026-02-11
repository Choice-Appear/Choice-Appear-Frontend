import styles from './CategoryList.module.scss';
import { ProductsButton } from '@/shared/ui/button';
import { ProductsList } from '@/shared/ui/products';
import { useParams } from 'react-router-dom';

export const CategoryList = () => {
  const { category } = useParams<{ category: string }>();

  return (
    <section className={styles.container}>
      {/* 상품 이동 버튼 */}
      <ProductsButton />

      {/* 상품 목록 */}
      <ProductsList category={category} />
    </section>
  );
};
