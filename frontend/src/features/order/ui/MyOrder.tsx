import styles from './MyOrder.module.scss';

export const MyOrder = () => {
  const labels = ['입금 전', '배송 준비중', '배송중', '배송 완료'];

  return (
    <section
      className={styles.orderWrap}
      aria-label="주문 처리 현황"
    >
      {/* 주문처리 현황 */}
      <div className={styles.header}>
        <h3 className={styles.title}>나의 주문처리 현황 </h3>
        <div className={styles.hr} />
      </div>

      <div className={styles.statusRow}>
        {labels.map(label => (
          <div
            className={styles.status}
            key={label}
          >
            <div className={styles.number}>0</div>
            <div className={styles.label}>{label}</div>
          </div>
        ))}
      </div>

      {/* 교환 / 반품 / 취소 이력 */}
      <div className={styles.boxRow}>
        <div className={styles.boxItem}>
          취소: <strong>0</strong>
        </div>
        <div className={styles.boxItem}>
          교환: <strong>0</strong>
        </div>
        <div className={styles.boxItem}>
          반품: <strong>0</strong>
        </div>
      </div>

      {/* 주문 목록 */}
      <div className={styles.header}>
        <h3 className={styles.title}>주문내역 조회 </h3>
        <div className={styles.hr} />
        <p>주문 내역이 없습니다.</p>
      </div>
    </section>
  );
};
