import styles from './SidebarOptions.module.scss';
import { Link } from 'react-router-dom';

export const SidebarOptions = () => {
  return (
    <div className={styles.container}>
      <Link to={'/products/women'}>여성</Link>
      <Link to={'/products/men'}>남성</Link>
      <Link to={'/products/cap'}>모자</Link>
      <Link to={'/products/hoodie'}>후드</Link>
    </div>
  );
};
