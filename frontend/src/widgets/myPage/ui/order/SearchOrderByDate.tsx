import { Button } from '@/shared/ui/button';
import styles from './SearchOrderByDate.module.scss';

export const SearchOrderByDate = () => {
  return (
    <form>
      <fieldset>
        <legend className={styles.visuallyHidden}>검색 기간</legend>
        {/* 주문 상태 */}
        <div>
          <label
            htmlFor="order-status"
            className={styles.visuallyHidden}
          >
            주문 상태
          </label>
          <select
            name="order-status"
            id="order-status"
          >
            <option value="all">전체</option>
            <option value="shipped-before">입금 전</option>
            <option value="shipped-standby">배송 준비중</option>
            <option value="shipped-begin">배송중</option>
            <option value="shipped-complete">배송 완료</option>
          </select>
        </div>

        {/* 기간 선택 */}
        <div
          role="group"
          aria-label="검색 기간 선택"
        >
          <button
            type="button"
            data-days="0"
          >
            오늘
          </button>
          <button
            type="button"
            data-months="1"
          >
            1개월
          </button>
          <button
            type="button"
            data-months="3"
          >
            3개월
          </button>
          <button
            type="button"
            data-months="6"
          >
            6개월
          </button>
        </div>

        {/* 달력 */}

        {/* 조회 버튼 */}
        <Button variant="primary">조회</Button>
      </fieldset>
    </form>
  );
};
