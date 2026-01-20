import styles from './SidebarOptions.module.scss';
import { Link } from 'react-router-dom';

export const SidebarOptions = () => {
  return (
    <div className={styles.container}>
      <Link to={'/women'}>여성</Link>
      <Link to={'/men'}>남성</Link>
      <Link to={'/cap'}>모자</Link>
      <Link to={'/hoodie'}>후드</Link>
    </div>
  );
};
