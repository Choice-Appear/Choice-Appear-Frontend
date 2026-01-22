import styles from './MainPage.module.scss';
import { ProductsCategories } from '@/widgets/mainPage';
import { MainBanner } from '@/widgets/mainBanner';

const MainPage = () => {
  return (
    <div>
      {/* 메인 배너 슬라이더 */}
      <MainBanner />

      {/* 상품 카테고리 */}
      <ProductsCategories />

      {/* 광고 */}
      <section className={styles.ad}>
        <p>광고</p>
      </section>

      {/* Footer */}
    </div>
  );
};

export default MainPage;
