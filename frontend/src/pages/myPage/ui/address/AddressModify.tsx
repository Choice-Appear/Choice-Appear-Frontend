import { Button } from '@/shared/ui/button';
import styles from './AddressModify.module.scss';
import { AddressForm, UserNavigation } from '@/widgets/myPage';
import { useLocation, useNavigate } from 'react-router-dom';

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
          <AddressForm />

          {/* 버튼 */}
          <div className={styles.button}>
            <Button
              className={styles.delete}
              onClick={handleCancel}
            >
              취소
            </Button>
            <Button
              variant="primary"
              className={styles.add}
            >
              {isEditMode ? '수정' : '등록'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
