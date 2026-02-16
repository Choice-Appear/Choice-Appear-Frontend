import { useNavigate } from 'react-router-dom';
import styles from './AddressList.module.scss';
import { useState } from 'react';

interface Address {
  id: number;
  isDefault: boolean;
  addressName: string;
  recipient: string;
  phone: string;
  mobile: string;
  address: string;
}

export const AddressList = () => {
  const navigate = useNavigate();

  // 주소록 수정 페이지 라우팅
  const addressModify = () => {
    navigate('/mypage/address/modify');
  };

  // mockup 데이터
  const [addresses /*setAddresses*/] = useState<Address[]>([
    {
      id: 1,
      isDefault: false,
      addressName: '기본',
      recipient: '홍길동',
      phone: '02--',
      mobile: '010-1234-5678',
      address: '(01234)서울특별시 동작구 123동 456호',
    },
    {
      id: 2,
      isDefault: false,
      addressName: '기본',
      recipient: '임꺽정',
      phone: '02--',
      mobile: '010-2345-6789',
      address: '(01234)서울특별시 동작구 234동 567호',
    },
  ]);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(addresses.map(addr => addr.id));
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
            <th>주소록 고정</th>
            <th>배송지명</th>
            <th>수령인</th>
            <th>일반전화</th>
            <th>휴대전화</th>
            <th>주소</th>
            <th>수정</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map(address => (
            <tr key={address.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(address.id)}
                  onChange={e => handleSelectOne(address.id, e.target.checked)}
                />
              </td>
              <td>-</td>
              <td>
                <span className={styles.addressNameBadge}>
                  {address.addressName}
                </span>{' '}
                집
              </td>
              <td>{address.recipient}</td>
              <td>{address.phone}</td>
              <td>{address.mobile}</td>
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
      </table>
    </div>
  );
};
