import styles from './MyAddress.module.scss';
import { useDeleteAddress } from '@/entities/address/model/useDeleteAddress';
import { Button } from '@/shared/ui/button';
import { AddressList, AddressNotice, UserNavigation } from '@/widgets/myPage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const MyAddress = () => {
  const navigate = useNavigate();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const { mutateAsync: deleteAddress } = useDeleteAddress();

  /* 주소록 삭제 버튼 핸들러 */
  const handleDelete = async () => {
    // 선택된 주소록이 없을 때
    if (selectedIds.length === 0) {
      alert('선택된 주소록이 없습니다.');
      return;
    }

    // 주소록 삭제
    if (window.confirm('정말 삭제하시겠습니까?')) {
      await Promise.all(selectedIds.map(id => deleteAddress(id)));
      setSelectedIds([]);  // 선택 초기화
    }
  };

  /* 배송지 등록 버튼 핸들러 */
  const registerAddress = () => {
    navigate('/mypage/address/register');
  };

  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <UserNavigation />

        <div>
          {/* 주소록 목록 테이블 */}
          <AddressList
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
          />

          {/* 주소록 추가/삭제 버튼 */}
          <div className={styles.button}>
            <Button
              className={styles.delete}
              onClick={handleDelete}
            >
              선택 주소록 삭제
            </Button>
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
