import img1 from '@/shared/assets/img1.jpg';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={img1}
        alt="샘플이미지"
      />
    </div>
  );
};

export default MainPage;
