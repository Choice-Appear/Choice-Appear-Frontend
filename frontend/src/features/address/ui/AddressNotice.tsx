import styles from './AddressNotice.module.scss';

export const AddressNotice = () => {
  return (
    <div className={styles.notice}>
      <div>
        <h3 className={styles.title}>배송 주소록 유의사항</h3>
        <div className={styles.hr}></div>
      </div>
      <div className={styles.boxRow}>
        <ul>
          <li>
            배송 주소록은 최대 10개까지 등록할 수 있으며, 별도로 등록하지 않을
            경우 최근 배송 주소록 기준으로 자동 업데이트 됩니다.
          </li>
          <li>
            기본 배송지는 1개만 저장됩니다. 다른 배송지를 기본 배송지로
            설정하시면 기본 배송지가 변경됩니다.
          </li>
          <li>
            기본 배송지를 삭제할 경우, 남아있는 주소록 중 가장 최근에 추가한
            배송지가 기본 배송지로 설정됩니다.
          </li>
        </ul>
      </div>
    </div>
  );
};
