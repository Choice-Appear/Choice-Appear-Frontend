import { UserNavigation } from '@/features/myPageNavigation';
import styles from './MyAddress.module.scss';
import { AddressList, AddressNotice } from '@/features/address';
import { Button } from '@/shared/ui/button';
import { useAddressList, useDeleteAddress } from '@/entities/address';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const MyAddress = () => {
  const navigate = useNavigate();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const { mutateAsync: deleteAddress } = useDeleteAddress();
  const { data: addresses = [], isLoading, isError } = useAddressList();

  /* 주소록 삭제 버튼 핸들러 */
  const handleDelete = async () => {
    // 선택된 주소록이 없을 때
    if (selectedIds.length === 0) {
      alert('선택된 주소록이 없습니다.');
      return;
    }

    // 주소록 삭제
    if (window.confirm('정말 삭제하시겠습니까?')) {
      await deleteAddress(selectedIds);
      setSelectedIds([]); // 선택 초기화
    }
  };

  /* 배송지 등록 버튼 핸들러 */
  const registerAddress = () => {
    if (addresses.length >= 10) {
      alert('배송지는 최대 10개까지 등록 가능합니다.');
      return;
    }
    navigate('/mypage/address/register');
  };

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>데이터를 불러오는 데 실패했습니다.</div>;

  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <UserNavigation />

        <div>
          {/* 주소록 목록 테이블 */}
          <AddressList
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            addresses={addresses}
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
