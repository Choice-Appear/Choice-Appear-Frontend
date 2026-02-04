import styles from './CouponInput.module.scss';
import { Button } from '@/shared/ui/button';
import { CircleAlert } from 'lucide-react';

export const CouponInput = () => {
  return (
    <section
      className={styles.myCoupon}
      aria-label="쿠폰 내역"
    >
      {/* 쿠폰 내역 */}
      <div>
        <h3 className={styles.title}>쿠폰 내역</h3>
        <div className={styles.hr} />
      </div>

      {/* 쿠폰 번호 input 폼 */}
      <div className={styles.boxRow}>
        <input
          className={styles.boxItem}
          type="text"
        />
        <Button
          className={styles.button}
          variant="primary"
        >
          쿠폰 등록
        </Button>
        <p>반드시 쇼핑몰에서 발행한 쿠폰번호만 입력해주세요.</p>
      </div>

      {/* 쿠폰 목록 */}
      <div className={styles.couponList}>
        {/* API 연동 후 추가 작업 예정 */}
        <CircleAlert className={styles.couponAlert} />
        <p>보유하신 쿠폰이 없습니다.</p>
      </div>
    </section>
  );
};
