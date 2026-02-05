import { CouponInput, UserNavigation } from '@/widgets/myPage';
import styles from './Coupon.module.scss';

export const Coupon = () => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <UserNavigation />

        <div className={styles.inputForm}>
          <CouponInput />
        </div>
      </section>
    </div>
  );
};
