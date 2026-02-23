import styles from './AddressList.module.scss';
import { useNavigate } from 'react-router-dom';
import {
  type GetAddressListResponse,
} from '@/entities/address';
import { CircleAlert } from 'lucide-react';

interface AddressListProps {
  selectedIds: number[];
  setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>;
  addresses: GetAddressListResponse[];
}

export const AddressList = ({
  selectedIds,
  setSelectedIds,
  addresses,
}: AddressListProps) => {
  const navigate = useNavigate();

  /* 배송지 등록 버튼 라우팅 */
  const addressModify = () => {
    navigate('/mypage/address/modify');
  };

  /* 주소록 선택 체크박스 */
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(addresses.map(address => address.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    }
  };

  const isAllSelected =
    addresses.length > 0 && selectedIds.length === addresses.length;

  return (
    <div className={styles.myAddress}>
      {/* 배송 주소록 */}
      <div>
        <h2 className={styles.title}>배송 주소록 관리</h2>
        <div className={styles.hr}></div>
      </div>

      {/* 배송지 리스트 */}
      <table className={styles.addressTable}>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={e => handleSelectAll(e.target.checked)}
              />
            </th>
            <th>배송지명</th>
            <th>수령인</th>
            <th>일반전화</th>
            <th>휴대전화</th>
            <th>주소</th>
            <th>수정</th>
          </tr>
        </thead>

        {addresses.length > 0 && (
          <tbody>
            {addresses.map(address => (
              <tr key={address.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(address.id)}
                    onChange={e =>
                      handleSelectOne(address.id, e.target.checked)
                    }
                  />
                </td>
                <td>
                  {address.isPrimary && (
                    <span className={styles.addressNameBadge}>기본</span>
                  )}
                  {address.name}
                </td>
                <td>{address.recipient}</td>
                <td>
                  {address.generalPhoneNumber === null
                    ? '-'
                    : address.generalPhoneNumber}
                </td>
                <td>{address.cellPhoneNumber}</td>
                <td>{address.address}</td>
                <td>
                  <button
                    className={styles.editButton}
                    onClick={addressModify}
                  >
                    수정
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {addresses.length === 0 && (
        <div className={styles.addressList}>
          <CircleAlert className={styles.addressAlert} />
          <p>등록된 배송지가 없습니다.</p>
        </div>
      )}
    </div>
  );
};
