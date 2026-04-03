import styles from './QnaBoard.module.scss';
import { Button } from '@/shared/ui/button';
import { BoardList } from '@/widgets/board';
import { useNavigate } from 'react-router-dom';

export const QnaBoard = () => {
  const navigate = useNavigate();

  const goToQnaWrite = () => {
    navigate('/notice/new-post');
  };

  return (
    <div>
      <h1 className={styles.title}>Q & A</h1>
      <div className={styles.boardListWrapper}>
        <div className={styles.boardListToolbar}>
          <Button
            onClick={goToQnaWrite}
            variant="primary"
            className={styles.newBtn}
          >
            새 글 작성
          </Button>
        </div>
        <BoardList />
      </div>
    </div>
  );
};

export default QnaBoard;
