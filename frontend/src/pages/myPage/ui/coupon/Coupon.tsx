import styles from './Coupon.module.scss';
import { CouponInput } from '@/features/coupon';
import { UserNavigation } from '@/features/myPageNavigation';

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
