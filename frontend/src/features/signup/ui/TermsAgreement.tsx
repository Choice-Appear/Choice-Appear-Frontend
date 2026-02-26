import { useEffect, useState } from 'react';
import styles from './TermsAgreement.module.scss';
import { useTermsAgreementStore } from '../model/useTermsAgreementStore';

export const TermsAgreement = () => {
  const {
    termsChecked,
    emailChecked,
    smsChecked,
    privacyChecked,
    setTermsChecked,
    setEmailChecked,
    setSmsChecked,
    setPrivacyChecked,
    setAllChecked: setAllCheckedStore,
  } = useTermsAgreementStore();

  const [allChecked, setAllChecked] = useState(false);

  // 개별 체크박스 모두 체크 시 전체 동의도 체크
  useEffect(() => {
    if (termsChecked && emailChecked && smsChecked && privacyChecked) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [termsChecked, emailChecked, smsChecked, privacyChecked]);

  // 전체 동의 체크박스 핸들러
  const handleAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setAllChecked(checked);  // 로컬 상태 업데이트
    setAllCheckedStore(checked);  // Zustand 상태 업데이트
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
          id="privacy-agreement"
          type="checkbox"
          checked={privacyChecked}
          onChange={e => setPrivacyChecked(e.target.checked)}
        />
        <label htmlFor="privacy-agreement">개인정보 이용 동의</label>
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
