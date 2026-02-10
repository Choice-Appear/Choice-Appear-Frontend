import styles from './ProductsButton.module.scss';
import { Button } from './Button';
import { useLocation, useNavigate } from 'react-router-dom';

export const ProductsButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // 카테고리 추출
  const getActiveCategory = () => {
    const match = currentPath.match(/\/products\/(\w+)/);
    return match ? match[1].toUpperCase() : '';
  };

  const activeCategory = getActiveCategory();
  const categories = ['MEN', 'WOMEN', 'CAP', 'HOODIE'];

  // 버튼 클릭 시 이동
  const handleClick = (category: string) => {
    navigate(`/products/${category.toLowerCase()}`);
  };

  return (
    <div className={styles.button}>
      {categories.map(category => (
        <Button
          key={category}
          variant={activeCategory === category ? 'primary' : 'cancel'}
          onClick={() => handleClick(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
