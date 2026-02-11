import styles from './NoticeBoard.module.scss';
import { BoardList } from '@/widgets/board';

export const NoticeBoard = () => {
  return (
    <div>
      <h1 className={styles.title}>공지사항</h1>
      <BoardList />
    </div>
  );
};

export default NoticeBoard;
