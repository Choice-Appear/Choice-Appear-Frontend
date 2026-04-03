import { Button } from '@/shared/ui/button';
import styles from './NoticeBoard.module.scss';
import { BoardList } from '@/widgets/board';
import { Outlet, useNavigate } from 'react-router-dom';

export const NoticeBoard = () => {
  const navigate = useNavigate();

  const goToNoticeWrite = () => {
    navigate('/notice/new-post');
  };

  return (
    <div>
      <h1 className={styles.title}>공지사항</h1>
      <div className={styles.boardListWrapper}>
        <div className={styles.boardListToolbar}>
          <Button
            onClick={goToNoticeWrite}
            variant="primary"
            className={styles.newBtn}
          >
            새 글 작성
          </Button>
        </div>
        <BoardList />
      </div>
      <Outlet />
    </div>
  );
};

export default NoticeBoard;
