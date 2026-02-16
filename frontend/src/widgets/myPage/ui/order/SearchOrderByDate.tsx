import { Button } from '@/shared/ui/button';
import styles from './SearchOrderByDate.module.scss';
import { useState } from 'react';

interface SearchOrderByDateProps {
  showOrderStatus: boolean;
}

// 날짜 변환 헬퍼 함수
const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-CA'); // YYYY-MM-DD 형식으로 변환
};

// 오늘 날짜 계산
const getToday = (): string => {
  return formatDate(new Date());
};

// 3개월 전 날짜 계산
const getThreeMonthAgo = () => {
  const date = new Date();
  date.setDate(date.getDate() - 90);
  return formatDate(date);
};

export const SearchOrderByDate = ({
  showOrderStatus = true,
}: SearchOrderByDateProps) => {
  const [startDate, setStartDate] = useState(getThreeMonthAgo());
  const [endDate, setEndDate] = useState(getToday());
  const [selectedPeriod, setSelectedPeriod] = useState<number>(90);

  // 시작일 설정
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);

    // 시작일이 종료일 이후로 설정 시 종료일을 시작일로 재설정
    if (newStartDate > endDate) {
      setEndDate(newStartDate);
    }

    // 수동으로 날짜 변경 시 선택 상태 초기화
    setSelectedPeriod(-1);
  };

  // 종료일 설정
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);

    // 수동으로 날짜 변경 시 선택 상태 초기화
    setSelectedPeriod(-1);
  };

  // 기간 버튼 클릭 핸들러
  const handlePeriondClick = (days: number) => {
    const today = new Date();
    const start = new Date();

    start.setDate(start.getDate() - days);

    setStartDate(formatDate(start));
    setEndDate(formatDate(today));
    setSelectedPeriod(days); // 선택된 기간 저장
  };

  // 날짜 선택 핸들러
  const handleOpenCalendar = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    try {
      target.showPicker?.();
    } catch (error) {
      console.log('showPicker not supported: ', error);
    }
  };

  return (
    <form className={styles.form}>
      <fieldset>
        <legend className={styles.visuallyHidden}>검색 기간</legend>

        {/* 조건부 렌더링 - 주문 상태 */}
        {showOrderStatus && (
          <div className={styles.orderStatus}>
            <label
              htmlFor="order-status"
              className={styles.visuallyHidden}
            >
              주문 상태
            </label>
            <select
              name="order-status"
              id="order-status"
              className={styles.select}
            >
              <option value="all">전체</option>
              <option value="shipped-before">입금 전</option>
              <option value="shipped-standby">배송 준비중</option>
              <option value="shipped-begin">배송중</option>
              <option value="shipped-complete">배송 완료</option>
            </select>
          </div>
        )}

        {/* 기간 선택 */}
        <div className={styles.periodButtons}>
          <button
            type="button"
            onClick={() => handlePeriondClick(0)}
            className={selectedPeriod === 0 ? styles.active : ''}
            data-days="0"
          >
            오늘
          </button>
          <button
            type="button"
            onClick={() => handlePeriondClick(30)}
            className={selectedPeriod === 30 ? styles.active : ''}
            data-months="1"
          >
            1개월
          </button>
          <button
            type="button"
            onClick={() => handlePeriondClick(90)}
            className={selectedPeriod === 90 ? styles.active : ''}
            data-months="3"
          >
            3개월
          </button>
          <button
            type="button"
            onClick={() => handlePeriondClick(180)}
            className={selectedPeriod === 180 ? styles.active : ''}
            data-months="6"
          >
            6개월
          </button>
        </div>

        {/* 날짜 입력 */}
        <div className={styles.dateRange}>
          <input
            type="date"
            id="start-date"
            name="start-date"
            value={startDate}
            onChange={handleStartDateChange}
            onClick={handleOpenCalendar}
            aria-label="시작 날짜"
          />
          <span className={styles.dateSeparator}>~</span>
          <input
            type="date"
            id="end-date"
            name="end-date"
            value={endDate}
            min={startDate}
            onChange={handleEndDateChange}
            onClick={handleOpenCalendar}
            aria-label="종료 날짜"
          />
        </div>

        {/* 조회 버튼 */}
        <div className={styles.searchButton}>
          <Button variant="primary">조회</Button>
        </div>
      </fieldset>
    </form>
  );
};
