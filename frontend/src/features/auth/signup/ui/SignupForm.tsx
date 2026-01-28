import styles from './SignupForm.module.scss';
import { useSignupStore } from '../model/useSignupStore';

export const SignupForm = () => {
  const {
    profileId,
    password,
    passwordCheck,
    nickname,
    email,
    phone,
    setProfileId,
    setPassword,
    setPasswordCheck,
    setNickname,
    setEmail,
    setPhonePrefix,
    setPhoneMiddle,
    setPhoneLast,
  } = useSignupStore();

  return (
    <form id='signup-form'>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>
              <span className={styles.required}>*</span> &nbsp; 아이디
            </th>
            <td>
              <div>
                <input
                  className={styles.input}
                  id="profile-id"
                  type="text"
                  pattern="^(?=.*[a-z])[a-z0-9]{4,16}$"
                  title="4~16자 사이의 영문 소문자를 입력하세요."
                  value={profileId}
                  onChange={e => setProfileId(e.target.value)}
                  required
                />
              </div>
              <div className={styles.guide}>
                영문 소문자(숫자 조합 가능), 4~16자 / 로그인 시 사용되는
                아이디입니다.
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
                  className={styles.input}
                  id="password"
                  type="password"
                  pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,16}$"
                  title="영문 대소문자, 숫자, 특수문자 모두를 포함한 10~16자를 입력하세요."
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className={styles.guide}>
                영문 대소문자/숫자/특수문자 모두 포함한 10~16자
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <span className={styles.required}>*</span> &nbsp; 비밀번호 확인
            </th>
            <td>
              <input
                className={styles.input}
                id="password-check"
                type="password"
                value={passwordCheck}
                onChange={e => setPasswordCheck(e.target.value)}
                required
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
                  className={styles.input}
                  id="nickname"
                  type="text"
                  value={nickname}
                  onChange={e => setNickname(e.target.value)}
                  required
                />
              </div>
              <div className={styles.guide}>
                사이트 내에서 보여지는 회원님의 이름입니다.
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <span className={styles.required}>*</span> &nbsp; 이메일
            </th>
            <td>
              <input
                className={styles.input}
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <th>
              <span className={styles.required}>*</span> &nbsp; 전화번호
            </th>
            <td>
              <div className={styles.phoneInputContainer}>
                <select
                  className={styles.phonePrefix}
                  value={phone.prefix}
                  onChange={e => setPhonePrefix(e.target.value)}
                >
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
                  value={phone.middle}
                  onChange={e => setPhoneMiddle(e.target.value)}
                  required
                />
                <span className={styles.phoneDash}>-</span>
                <input
                  type="tel"
                  className={styles.phoneInput}
                  placeholder=""
                  maxLength={4}
                  value={phone.last}
                  onChange={e => setPhoneLast(e.target.value)}
                  required
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};
