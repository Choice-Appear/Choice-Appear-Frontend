import styles from './UserNavigation.module.scss';
import { Link } from 'react-router-dom';

export const UserNavigation = () => {
  return (
    <div>
      {/* 나의 쇼핑 정보 */}
      <div className={styles.shoppingInfo}>
        <h3>나의 쇼핑 정보</h3>
        <Link
          to={'/'}
          className={styles.link}
        >
          주문내역 조회
        </Link>
        <Link
          to={'/'}
          className={styles.link}
        >
          적립금 내역
        </Link>
        <Link
          to={'/mypage/coupon'}
          className={styles.link}
        >
          쿠폰 내역
        </Link>
        <Link
          to={'/mypage/address'}
          className={styles.link}
        >
          배송 주소록 관리
        </Link>
      </div>

      {/* 활동 정보 */}
      <div className={styles.activityInfo}>
        <h3>활동 정보</h3>
        <Link
          to={'/'}
          className={styles.link}
        >
          최근 본 상품
        </Link>
        <Link
          to={'/'}
          className={styles.link}
        >
          나의 위시리스트
        </Link>
        <Link
          to={'/'}
          className={styles.link}
        >
          나의 게시글
        </Link>
      </div>

      {/* 나의 정보 */}
      <div className={styles.myInfo}>
        <h3>나의 정보</h3>
        <Link
          to={'/'}
          className={styles.link}
        >
          회원 정보 수정
        </Link>
        <Link
          to={'/'}
          className={styles.link}
        >
          로그아웃
        </Link>
      </div>
    </div>
  );
};
