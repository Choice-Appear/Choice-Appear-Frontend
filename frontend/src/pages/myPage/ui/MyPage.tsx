import styles from './MyPage.module.scss';
import { UserInfo } from '@/widgets/myPage';
import { UserNavigation } from '@/features/myPageNavigation';
import { MyOrder } from '@/features/order/ui/MyOrder';

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
