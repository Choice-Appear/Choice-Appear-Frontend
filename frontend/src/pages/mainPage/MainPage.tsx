import main1 from '@/shared/assets/main1.png';
import women from '@/shared/assets/women.jpg';
import men from '@/shared/assets/men.jpg';
import cap from '@/shared/assets/cap.jpg';
import temp4 from '@/shared/assets/임시4.jpg';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <main>
      <section className={styles.main}>
        <div>
          <img
            className={styles.img}
            src={main1}
            alt="메인1"
          />
        </div>
      </section>
      <section className={styles.categoryContainer}>
        <div className={styles.categoryItem}>
          <img
            src={women}
            alt="여성"
          />
        </div>
        <div className={styles.categoryItem}>
          <img
            src={men}
            alt="남성"
          />
        </div>
        <div className={styles.categoryItem}>
          <img
            src={cap}
            alt="모자"
          />
        </div>
        <div className={styles.categoryItem}>
          <img
            src={temp4}
            alt="임시4"
          />
        </div>
      </section>

      <section className={styles.ad}>
        <p>광고</p>
      </section>
    </main>
  );
};

export default MainPage;
