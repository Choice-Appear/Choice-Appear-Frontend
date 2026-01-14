import women from '@/shared/assets/women.jpg';
import men from '@/shared/assets/men.jpg';
import cap from '@/shared/assets/cap.jpg';
import hoodie from '@/shared/assets/hoodie.jpg';
import styles from './MainPage.module.scss';
import { MainBanner } from '@/widgets/mainBanner';

const MainPage = () => {
  return (
    <main>
      {/* 메인 배너 슬라이더 */}
      <MainBanner />

      <section className={styles.categoryContainer}>
        <div className={styles.categoryItem}>
          <img
            src={women}
            alt="여성"
          />
          <div className={styles.overlay}>
            <span className={styles.categoryText}>여성</span>
          </div>
        </div>
        <div className={styles.categoryItem}>
          <img
            src={men}
            alt="남성"
          />
          <div className={styles.overlay}>
            <span className={styles.categoryText}>남성</span>
          </div>
        </div>
        <div className={styles.categoryItem}>
          <img
            src={cap}
            alt="모자"
          />
          <div className={styles.overlay}>
            <span className={styles.categoryText}>모자</span>
          </div>
        </div>
        <div className={styles.categoryItem}>
          <img
            src={hoodie}
            alt="후드"
          />
          <div className={styles.overlay}>
            <span className={styles.categoryText}>후드</span>
          </div>
        </div>
      </section>

      <section className={styles.ad}>
        <p>광고</p>
      </section>
    </main>
  );
};

export default MainPage;
