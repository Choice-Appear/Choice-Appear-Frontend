import styles from './SignupForm.module.scss';

export const SignupForm = () => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>
            <span className={styles.required}>*</span> &nbsp; 아이디
          </th>
          <td>
            <div>
              <input
                id="profile-id"
                type="text"
              />
            </div>
            <div className={styles.guide}>
              (영문 소문자, 4~16자 / 로그인 시 사용되는 아이디입니다.)
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <span className={styles.required}>*</span> &nbsp; 비밀번호
          </th>
          <td>
            <div>
              <input
                id="password"
                type="password"
              />
            </div>
            <div className={styles.guide}>
              (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10~16자)
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <span className={styles.required}>*</span> &nbsp; 비밀번호 확인
          </th>
          <td>
            <input
              id="password-check"
              type="password"
            />
          </td>
        </tr>
        <tr>
          <th>
            <div>
              <span className={styles.required}>*</span> &nbsp; 닉네임
            </div>
          </th>
          <td>
            <div>
              <input
                id="nickname"
                type="text"
              />
            </div>
            <div className={styles.guide}>
              (로그인 후 보여지는 회원님의 이름입니다.)
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <span className={styles.required}>*</span> &nbsp; 이메일
          </th>
          <td>
            <input
              id="email"
              type="text"
            />
          </td>
        </tr>
        <tr>
          <th>
            <span className={styles.required}>*</span> &nbsp; 전화번호
          </th>
          <td>
            <input
              id="cellphone-number"
              type="text"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
