import styles from './CategoryList.module.scss';
import { ProductsList } from '@/features/products';
import { ProductsButton } from '@/shared/ui/button';
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
