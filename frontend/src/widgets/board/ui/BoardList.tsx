import styles from './BoardList.module.scss';
import { mockBoards } from '../api/boardList';

export const BoardList = () => {
  const handleBoardClick = (id: number) => {
    // 게시글 상세 페이지로 이동 (추후 구현)
    console.log(`게시글 ${id} 클릭`);
  };

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
          {mockBoards.map(board => (
            <tr
              key={board.id}
              className={styles.row}
              onClick={() => handleBoardClick(board.id)}
            >
              <td className={`${styles.cell} ${styles.number}`}>{board.id}</td>
              <td className={`${styles.cell} ${styles.title}`}>
                <span className={styles.titleText}>{board.title}</span>
              </td>
              <td className={`${styles.cell} ${styles.author}`}>
                {board.author}
              </td>
              <td className={`${styles.cell} ${styles.date}`}>
                {board.created_at}
              </td>
              <td className={`${styles.cell} ${styles.views}`}>
                {board.view_count.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {mockBoards.length === 0 && (
        <div className={styles.empty}>
          <p>등록된 게시글이 없습니다.</p>
        </div>
      )}
    </div>
  );
};
