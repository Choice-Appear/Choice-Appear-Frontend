import styles from './AddressModify.module.scss';
import { Button } from '@/shared/ui/button';
import { AddressForm, UserNavigation } from '@/widgets/myPage';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { addressApi, type AddAddressRequest } from '@/entities/address';

export const AddressModify = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 경로 추출
  const getPath = () => {
    const parts = location.pathname.split('/');
    return parts[parts.length - 1];
  };

  const currentPath = getPath();
  const isEditMode = currentPath === 'modify';

  // 배송지 등록 mutation
  const addAddressMutation = useMutation({
    mutationFn: (data: AddAddressRequest) => addressApi.addAddress(data),
    onSuccess: () => {
      alert('배송지가 등록되었습니다.');
      navigate('/mypage/address');
    },
    onError: error => {
      console.error('배송지 등록 실패: ', error);
      alert('배송지 등록에 실패했습니다. 다시 시도해주세요.');
    },
  });

  // 폼 제출 핸들러
  const handleFormSubmit = (data: AddAddressRequest) => {
    if (isEditMode) {
      console.log('수정 모드: ', data);
    } else {
      addAddressMutation.mutate(data);
    }
  };

  // 등록 or 수정 버튼 클릭
  const handleSubmit = () => {
    const form = document.getElementById('address-form') as HTMLFormElement;
    form?.requestSubmit();
  };

  // 취소 버튼 클릭
  const handleCancel = () => {
    if (window.confirm('작성하신 내용이 사라집니다.')) {
      navigate('/mypage/address');
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <UserNavigation />

        <div>
          <h2>배송 주소록 관리</h2>

          {/* 주소록 입력 폼 */}
          <AddressForm onSubmit={handleFormSubmit} />

          {/* 버튼 */}
          <div className={styles.button}>
            <Button
              className={styles.delete}
              onClick={handleCancel}
              disabled={addAddressMutation.isPending}
            >
              취소
            </Button>
            <Button
              variant="primary"
              className={styles.add}
              onClick={handleSubmit}
              disabled={addAddressMutation.isPending}
            >
              {addAddressMutation.isPending
                ? '처리 중...'
                : isEditMode
                  ? '수정'
                  : '등록'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
