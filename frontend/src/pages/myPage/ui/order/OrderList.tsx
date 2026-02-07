import styles from './OrderList.module.scss';
import { UserNavigation } from '@/widgets/myPage';
import { SearchOrderByDate } from '@/widgets/myPage/ui/order/SearchOrderByDate';

export const OrderList = () => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <UserNavigation />

        <div>
          <h2 className={styles.title}>주문 조회</h2>

          {/* 탭 */}
          <div className={styles.tabs}>
            <button type="button">주문내역 조회</button>
            <button type="button">취소/반품/교환 내역</button>
          </div>

          {/* 검색 폼 */}
          <SearchOrderByDate />

          {/* 검색 안내사항 */}
          <ul className={styles.notice}>
            <li>
              기본적으로 최근 3개월 간의 내역이 조회되며, 기간 검색 시 주문처리
              완료 후 36개월 이내의 주문내역을 조회할 수 있습니다.
            </li>
            <li>
              완료 후 36개월 이상 경과한 주문은 [과거주문내역]에서 확인할 수
              있습니다.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
