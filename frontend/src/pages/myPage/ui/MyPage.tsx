import styles from './MyPage.module.scss';
import { MyOrder, UserInfo, UserNavigation } from '@/widgets/myPage';

export const MyPage = () => {
  return (
    <div className={styles.container}>
      <h1>마이 쇼핑</h1>

      <section className={styles.content}>
        <div className={styles.userInfo}>
          <UserInfo />
        </div>

        <UserNavigation />

        <div className={styles.orderStatus}>
          <MyOrder />
        </div>
      </section>
    </div>
  );
};
