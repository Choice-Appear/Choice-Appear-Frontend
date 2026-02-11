import styles from './UserViewProducts.module.scss';
import thumbnail from '@/shared/assets/thumbnail.jpg';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '../../../shared/ui/button';

// 임시 데이터 타입
interface Product {
  id: number;
  thumbnailImage: string;
  name: string;
  price: number;
}

// mockup 데이터
const mockProducts: Product[] = [
  { id: 1, thumbnailImage: thumbnail, name: '상품1', price: 57000 },
  { id: 1, thumbnailImage: thumbnail, name: '상품2', price: 43000 },
];

export const UserViewProducts = () => {
  return (
    <div>
      {/* 구분선 */}
      <hr className={styles.horizontal} />

      {/* 상품 목록 */}
      {mockProducts.map(product => (
        <div className={styles.wishList}>
          <span>
            <input
              id="wish_idx"
              type="checkbox"
            />
          </span>

          {/* 상품 썸네일 이미지 */}
          <Link to={'/'}>
            <img
              className={styles.image}
              src={product.thumbnailImage}
              alt={product.name}
            />
          </Link>

          {/* 상품 정보 */}
          <div className={styles.productsInfo}>
            <Link
              to={'/'}
              className={styles.title}
            >
              {product.name}
            </Link>
            <p className={styles.price}>{product.price.toLocaleString()}원</p>
          </div>

          {/* 버튼 */}
          <X className={styles.deleteButton} />

          <div className={styles.button}>
            <Button className={styles.delete}>장바구니</Button>
            <Button
              className={styles.add}
              variant="primary"
            >
              주문하기
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
