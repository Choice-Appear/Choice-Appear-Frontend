import styles from './SignupResult.module.scss';
import { useSignupStore } from '../model/useSignupStore';
import { UserRound } from '@/shared/icons';

export const SignupResult = () => {
  // 저장된 가입 정보를 표시
  const { profileId, nickname } = useSignupStore.getState();
  const displayName = nickname || profileId || '회원';

  return (
    <div className={styles.card}>
      <div
        className={styles.avatar}
        aria-hidden
      >
        <UserRound size={36} />
      </div>

      <h3 className={styles.title}>회원가입이 완료되었습니다.</h3>
      <p className={styles.subtitle}>
        {displayName} 님은 <strong>[일반회원]</strong> 입니다.
      </p>

      <hr className={styles.separator} />

      <dl className={styles.infoList}>
        <div className={styles.row}>
          <dt>아이디</dt>
          <dd>{profileId || '-'}</dd>
        </div>

        <div className={styles.row}>
          <dt>닉네임</dt>
          <dd>{displayName}</dd>
        </div>
      </dl>
    </div>
  );
};
