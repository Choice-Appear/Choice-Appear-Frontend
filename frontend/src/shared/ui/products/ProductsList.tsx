import styles from './ProductsList.module.scss';
import { Link } from 'react-router-dom';
import thumbnail from '@/shared/assets/thumbnail.jpg';

// 임시 데이터 타입
interface Product {
  id: number;
  thumbnailImage: string;
  name: string;
  price: number;
}

interface ProductsListProps {
  category?: string;
}

// mockup 데이터
const mockProducts: Product[] = [
  { id: 1, thumbnailImage: thumbnail, name: '상품1', price: 57000 },
  { id: 2, thumbnailImage: thumbnail, name: '상품2', price: 43000 },
  { id: 3, thumbnailImage: thumbnail, name: '상품3', price: 69000 },
  { id: 4, thumbnailImage: thumbnail, name: '상품4', price: 69000 },
  { id: 5, thumbnailImage: thumbnail, name: '상품5', price: 69000 },
  { id: 6, thumbnailImage: thumbnail, name: '상품6', price: 69000 },
];

export const ProductsList = ({ category }: ProductsListProps) => {
  return (
    <div className={styles.container}>
      <ul>
        {mockProducts.map(product => (
          <li key={product.id}>
            {/* 상품 이미지 */}
            <div>
              <Link to={`/products/${category}`}>
                <img
                  className={styles.image}
                  src={product.thumbnailImage}
                  alt={product.name}
                />
              </Link>
            </div>

            {/* 구분선 */}
            <hr className={styles.horizontal} />

            {/* 상품명 & 가격 */}
            <Link
              to={`/products/${category}`}
              className={styles.link}
            >
              <div>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
