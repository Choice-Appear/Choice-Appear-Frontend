import { BoardPagenation } from '@/shared/ui/pagenation';
import { useBoardList } from '../model/useBoardList';
import styles from './BoardList.module.scss';

export const BoardList = () => {
  const {
    boards,
    totalPages,
    first,
    last,
    currentPage,
    setCurrentPage,
    isLoading,
    isError,
  } = useBoardList();

  /* 게시글 상세 페이지 이동 (추후 구현) */
  const handleBoardClick = (id: number) => {
    console.log(`게시글 ${id} 클릭`);
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <p>게시글을 불러오는 데 실패했습니다.</p>;

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            <th className={`${styles.column} ${styles.number}`}>번호</th>
            <th className={`${styles.column} ${styles.title}`}>제목</th>
            <th className={`${styles.column} ${styles.author}`}>작성자</th>
            <th className={`${styles.column} ${styles.date}`}>작성일</th>
            <th className={`${styles.column} ${styles.views}`}>조회수</th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          {boards.length === 0 ? (
            <tr>
              <td className={styles.empty}>등록된 게시글이 없습니다.</td>
            </tr>
          ) : (
            boards.map(board => (
              <tr
                key={board.id}
                className={styles.row}
                onClick={() => handleBoardClick(board.id)}
              >
                <td className={`${styles.cell} ${styles.number}`}>
                  {board.id}
                </td>
                <td className={`${styles.cell} ${styles.title}`}>
                  <span className={styles.titleText}>{board.title}</span>
                </td>
                <td className={`${styles.cell} ${styles.author}`}>
                  {board.accountId}
                </td>
                <td className={`${styles.cell} ${styles.date}`}>
                  {board.createdAt.split('T')[0]}
                </td>
                <td className={`${styles.cell} ${styles.views}`}>
                  {board.viewCount.toLocaleString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <BoardPagenation
        currentPage={currentPage}
        totalPages={totalPages}
        first={first}
        last={last}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
