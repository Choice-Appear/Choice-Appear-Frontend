import styles from './AddressModify.module.scss';
import { Button } from '@/shared/ui/button';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  addressApi,
  useGetAddress,
  type AddAddressRequest,
} from '@/entities/address';
import { UserNavigation } from '@/features/myPageNavigation';
import { AddressForm } from '@/features/address';

export const AddressModify = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { addressId } = useParams();
  const { data: addressData } = useGetAddress(Number(addressId) || 0);

  const isEditMode = !!addressId;

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

  // 배송지 수정 mutation
  const editAddressMutation = useMutation({
    mutationFn: (data: AddAddressRequest) =>
      addressApi.editAddress(Number(addressId), data),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['address'] });  // 배송지 단일 조회 캐시 전체 삭제
      queryClient.invalidateQueries({ queryKey: ['addressList'] });  // 배송지 목록 캐시 무효화
      alert('배송지가 수정되었습니다.');
      navigate('/mypage/address');
    },
    onError: error => {
      console.error('배송지 수정 실패: ', error);
      alert('배송지 수정에 실패했습니다.');
    },
  });

  // 폼 제출 핸들러
  const handleFormSubmit = (data: AddAddressRequest) => {
    if (isEditMode) {
      editAddressMutation.mutate(data);
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
          {(!isEditMode || addressData) && (
            <AddressForm
              onSubmit={handleFormSubmit}
              initialData={addressData}
            />
          )}

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
