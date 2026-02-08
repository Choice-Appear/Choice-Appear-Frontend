import styles from './OrderSearchNotice.module.scss';

export const OrderSearchNotice = () => {
  return (
    <ul className={styles.notice}>
      <li>
        기본적으로 최근 3개월 간의 내역이 조회되며, 기간 검색 시 주문처리 완료
        후 36개월 이내의 주문내역을 조회할 수 있습니다.
      </li>
      <li>
        완료 후 36개월 이상 경과한 주문은 [과거주문내역]에서 확인할 수 있습니다.
      </li>
    </ul>
  );
};
