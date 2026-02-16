import styles from './AddressForm.module.scss';

export const AddressForm = () => {
  return (
    <form id="signup-form">
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>
              <span className={styles.required}>*</span> &nbsp; 배송지명
            </th>
            <td>
              <div>
                <input
                  className={styles.input}
                  id="address-name"
                  required
                />
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <span className={styles.required}>*</span> &nbsp; 성명
            </th>
            <td>
              <div>
                <input
                  className={styles.input}
                  id="user-name"
                  required
                />
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <span className={styles.required}>*</span> &nbsp; 주소
            </th>
            <td>
              <input
                className={styles.input}
                id="user-address"
                required
              />
            </td>
          </tr>
          <tr>
            <th>
              <span className={styles.required}>*</span> &nbsp; 휴대전화
            </th>
            <td>
              <div className={styles.phoneInputContainer}>
                <select className={styles.phonePrefix}>
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                  <option value="019">019</option>
                </select>
                <span className={styles.phoneDash}>-</span>
                <input
                  type="tel"
                  className={styles.phoneInput}
                  placeholder=""
                  maxLength={4}
                  required
                />
                <span className={styles.phoneDash}>-</span>
                <input
                  type="tel"
                  className={styles.phoneInput}
                  placeholder=""
                  maxLength={4}
                  required
                />
              </div>
            </td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td>
              <input
                className={styles.input}
                id="tel"
                required
              />
            </td>
          </tr>
        </tbody>

        {/* 기본 배송지 여부 체크박스 */}
        <div className={styles.isDefault}>
          <input type="checkbox" id='default-address' />
          <label htmlFor='default-address'>기본 배송지로 설정</label>
        </div>
      </table>
    </form>
  );
};
