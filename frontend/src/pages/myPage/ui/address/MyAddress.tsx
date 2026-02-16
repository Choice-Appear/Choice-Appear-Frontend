import styles from './MyAddress.module.scss';
import { Button } from '@/shared/ui/button';
import { AddressList, AddressNotice, UserNavigation } from '@/widgets/myPage';
import { useNavigate } from 'react-router-dom';

export const MyAddress = () => {
  const navigate = useNavigate();

  const registerAddress = () => {
    navigate('/mypage/address/register');
  };

  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <UserNavigation />

        <div>
          {/* 주소록 목록 테이블 */}
          <AddressList />

          {/* 주소록 추가/삭제 버튼 */}
          <div className={styles.button}>
            <Button className={styles.delete}>선택 주소록 삭제</Button>
            <Button
              variant="primary"
              className={styles.add}
              onClick={registerAddress}
            >
              배송지 등록
            </Button>
          </div>

          {/* 주소록 관련 안내사항 */}
          <AddressNotice />
        </div>
      </section>
    </div>
  );
};
