import styles from './SidebarOptions.module.scss';
import { Link } from 'react-router-dom';

interface SidebarOptionsProps {
  onClose: () => void;
}

export const SidebarOptions = ({ onClose }: SidebarOptionsProps) => {
  return (
    <div className={styles.container}>
      <Link
        to={'/products/women'}
        onClick={onClose}
      >
        여성
      </Link>
      <Link
        to={'/products/men'}
        onClick={onClose}
      >
        남성
      </Link>
      <Link
        to={'/products/cap'}
        onClick={onClose}
      >
        모자
      </Link>
      <Link
        to={'/products/hoodie'}
        onClick={onClose}
      >
        후드
      </Link>
    </div>
  );
};
