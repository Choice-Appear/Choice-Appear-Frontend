import img1 from '@/shared/assets/img1.jpg';
import temp1 from '@/shared/assets/임시1.jpg';
import temp2 from '@/shared/assets/임시2.jpg';
import temp3 from '@/shared/assets/임시3.jpg';
import temp4 from '@/shared/assets/임시4.jpg';
import styles from './MainPage.module.scss';
import { Header } from '@/widgets/header';

const MainPage = () => {
  return (
    <>
      <Header hideHeader={true} />
      <main>
        <section className={styles.category}>
          <div>
            <img
              className={styles.img}
              src={img1}
              alt="샘플이미지"
            />
            <img
              className={styles.img}
              src={img1}
              alt="샘플이미지"
            />
          </div>
        </section>
        <section className={styles.category}>
          <div>
            <img
              className={styles.img}
              src={temp1}
              alt="임시1"
            />
            <img
              className={styles.img}
              src={temp1}
              alt="임시1"
            />
          </div>
        </section>
        <section className={styles.category}>
          <div>
            <img
              className={styles.img}
              src={temp2}
              alt="임시2"
            />
            <img
              className={styles.img}
              src={temp2}
              alt="임시2"
            />
          </div>
        </section>
        <section className={styles.category}>
          <div>
            <img
              className={styles.img}
              src={temp3}
              alt="임시3"
            />
            <img
              className={styles.img}
              src={temp3}
              alt="임시3"
            />
          </div>
        </section>
        <section className={styles.category}>
          <div>
            <img
              className={styles.img}
              src={temp4}
              alt="임시4"
            />
            <img
              className={styles.img}
              src={temp4}
              alt="임시4"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default MainPage;
