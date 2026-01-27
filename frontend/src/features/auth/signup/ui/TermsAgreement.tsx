import { useEffect, useState } from 'react';
import styles from './TermsAgreement.module.scss';
import { useTermsAgreementStore } from '../model/useTermsAgreementStore';

export const TermsAgreement = () => {
  const {
    termsChecked,
    emailChecked,
    smsChecked,
    setTermsChecked,
    setEmailChecked,
    setSmsChecked,
  } = useTermsAgreementStore();

  const [allChecked, setAllChecked] = useState(false);

  // 개별 체크박스 모두 체크 시 전체 동의도 체크
  useEffect(() => {
    if (termsChecked && emailChecked && smsChecked) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [termsChecked, emailChecked, smsChecked]);

  // 전체 동의 체크박스 핸들러
  const handleAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setAllChecked(checked);
    setTermsChecked(checked);
    setEmailChecked(checked);
    setSmsChecked(checked);
  };

  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <input
          id="agreement-all"
          type="checkbox"
          checked={allChecked}
          onChange={handleAllCheck}
        />
        <label
          className={styles.allAgrement}
          htmlFor="agreement-all"
        >
          모든 약관을 확인하였으며, 전체 동의합니다.
        </label>
      </div>
      <div className={styles.checkbox}>
        <input
          id="terms-agreement"
          type="checkbox"
          checked={termsChecked}
          onChange={e => setTermsChecked(e.target.checked)}
        />
        <label htmlFor="terms-agreement">약관 동의</label>
        <p className={styles.required}>* 필수</p>
      </div>
      <div className={styles.checkbox}>
        <input
          id="email-agreement"
          type="checkbox"
          checked={emailChecked}
          onChange={e => setEmailChecked(e.target.checked)}
        />
        <label htmlFor="email-agreement">이메일 수신 동의</label>
        <p>(선택)</p>
      </div>
      <div className={styles.checkbox}>
        <input
          id="sms-agreement"
          type="checkbox"
          checked={smsChecked}
          onChange={e => setSmsChecked(e.target.checked)}
        />
        <label htmlFor="sms-agreement">SMS 수신 동의</label>
        <p>(선택)</p>
      </div>
    </div>
  );
};
