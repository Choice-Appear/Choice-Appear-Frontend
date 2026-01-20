import styles from './ProductsCategories.module.scss';
import women from '@/shared/assets/women.jpg';
import men from '@/shared/assets/men.jpg';
import cap from '@/shared/assets/cap.jpg';
import hoodie from '@/shared/assets/hoodie.jpg';
import { Link } from 'react-router-dom';

export const ProductsCategories = () => {
  return (
    <section className={styles.categoryContainer}>
      {/* 여성 */}
      <Link
        to={'/products/women'}
        className={styles.categoryItem}
      >
        <div>
          <img
            src={women}
            alt="여성"
          />
          <div className={styles.overlay}>
            <span className={styles.categoryText}>여성</span>
          </div>
        </div>
      </Link>

      {/* 남성 */}
      <Link
        to={'/products/men'}
        className={styles.categoryItem}
      >
        <div>
          <img
            src={men}
            alt="남성"
          />
          <div className={styles.overlay}>
            <span className={styles.categoryText}>남성</span>
          </div>
        </div>
      </Link>

      {/* 모자 */}
      <Link
        to={'/products/cap'}
        className={styles.categoryItem}
      >
        <div>
          <img
            src={cap}
            alt="모자"
          />
          <div className={styles.overlay}>
            <span className={styles.categoryText}>모자</span>
          </div>
        </div>
      </Link>

      {/* 후드 */}
      <Link
        to={'/products/hoodie'}
        className={styles.categoryItem}
      >
        <div>
          <img
            src={hoodie}
            alt="후드"
          />
          <div className={styles.overlay}>
            <span className={styles.categoryText}>후드</span>
          </div>
        </div>
      </Link>
    </section>
  );
};
