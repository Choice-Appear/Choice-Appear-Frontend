import styles from './AddressForm.module.scss';
import type { AddAddressRequest } from '@/entities/address';
import { useState } from 'react';

interface AddressFormProps {
  onSubmit?: (data: AddAddressRequest) => void;
  initialData?: Partial<AddAddressRequest>;
}

export const AddressForm = ({ onSubmit, initialData }: AddressFormProps) => {
  const [formData, setFormData] = useState<AddAddressRequest>({
    name: initialData?.name || '',
    recipient: initialData?.recipient || '',
    address: initialData?.address || '',
    cellPhoneNumber: initialData?.cellPhoneNumber || '',
    generalPhoneNumber: initialData?.generalPhoneNumber || '',
    isPrimary: initialData?.isPrimary || false,
  });

  // 휴대전화 번호 분리
  const initialPhone = initialData?.cellPhoneNumber?.split('-') ?? [];

  const [phonePrefix, setPhonePrefix] = useState(initialPhone[0] || '010');
  const [phoneMiddle, setPhoneMiddle] = useState(initialPhone[1] || '');
  const [phoneLast, setPhoneLast] = useState(initialPhone[2] || '');

  // 휴대전화 번호 변경 핸들러
  const handlePhoneChange = (
    part: 'prefix' | 'middle' | 'last',
    value: string
  ) => {
    let newPrefix = phonePrefix;
    let newMiddle = phoneMiddle;
    let newLast = phoneLast;

    if (part === 'prefix') {
      newPrefix = value;
      setPhonePrefix(value);
    }
    if (part === 'middle') {
      newMiddle = value;
      setPhoneMiddle(value);
    }
    if (part === 'last') {
      newLast = value;
      setPhoneLast(value);
    }

    // 업데이트된 값으로 조합
    const fullNumber = `${newPrefix}-${newMiddle}-${newLast}`;
    setFormData(prev => ({ ...prev, cellPhoneNumber: fullNumber }));
  };

  // input 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 기본 배송지 체크박스 변경 핸들러
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, isPrimary: e.target.checked }));
  };

  // 폼 제출
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form
      id="address-form"
      onSubmit={handleSubmit}
    >
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>
              <span className={styles.required}>*</span> &nbsp; 배송지명
            </th>
            <td>
              <div>
                <input
                  className={styles.input}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <span className={styles.required}>*</span> &nbsp; 수령인
            </th>
            <td>
              <div>
                <input
                  className={styles.input}
                  name="recipient"
                  value={formData.recipient}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <span className={styles.required}>*</span> &nbsp; 주소
            </th>
            <td>
              <input
                className={styles.input}
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </td>
          </tr>
          <tr>
            <th>
              <span className={styles.required}>*</span> &nbsp; 휴대전화
            </th>
            <td>
              <div className={styles.phoneInputContainer}>
                <select
                  className={styles.phonePrefix}
                  value={phonePrefix}
                  onChange={e => handlePhoneChange('prefix', e.target.value)}
                >
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                  <option value="019">019</option>
                </select>
                <span className={styles.phoneDash}>-</span>
                <input
                  type="tel"
                  className={styles.phoneInput}
                  value={phoneMiddle}
                  onChange={e => handlePhoneChange('middle', e.target.value)}
                  maxLength={4}
                  required
                />
                <span className={styles.phoneDash}>-</span>
                <input
                  type="tel"
                  className={styles.phoneInput}
                  value={phoneLast}
                  onChange={e => handlePhoneChange('last', e.target.value)}
                  maxLength={4}
                  required
                />
              </div>
            </td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td>
              <input
                className={styles.input}
                name="generalPhoneNumber"
                value={formData.generalPhoneNumber ?? ''}
                onChange={handleInputChange}
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* 기본 배송지 여부 체크박스 */}
      <div className={styles.isDefault}>
        <input
          type="checkbox"
          id="isPrimary"
          checked={formData.isPrimary}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="isPrimary">기본 배송지로 설정</label>
      </div>
    </form>
  );
};
