import styles from './MyBasket.module.scss';
import { MyBasketHeader } from '@/features/myBasket';

export const MyBasket = () => {
  return (
    <div className={styles.container}>
      <MyBasketHeader currentStep={1} />
    </div>
  );
};
