import { useAuthStore } from '@/features/auth/login/model/authStore';
import styles from './UserInfo.module.scss';
import {
  BadgeDollarSign,
  BadgePercent,
  ShoppingCart,
  UserRound,
} from '@/shared/icons';

export const UserInfo = () => {
  const nickname = useAuthStore(state => state.nickname);

  return (
    <section className={styles.summaryWrap}>
      <div className={styles.summaryCard}>
        <div className={styles.userArea}>
          <div
            className={styles.avatar}
            aria-hidden
          >
            <UserRound size={28} />
          </div>
          <div className={styles.userText}>
            <h3>안녕하세요. {nickname} 님!</h3>
          </div>
        </div>

        <div className={styles.stat}>
          <div className={styles.icon}>
            <BadgeDollarSign size={40} />
          </div>
          <div className={styles.value}>0원</div>
          <div className={styles.label}>총 적립금</div>
        </div>

        <div className={styles.stat}>
          <div className={styles.icon}>
            <BadgePercent size={40} />
          </div>
          <div className={styles.value}>0개</div>
          <div className={styles.label}>쿠폰</div>
        </div>

        <div className={styles.stat}>
          <div className={styles.icon}>
            <ShoppingCart size={40} />
          </div>
          <div className={styles.value}>0회</div>
          <div className={styles.label}>총 주문</div>
        </div>
      </div>
    </section>
  );
};
