import styles from './BoardPagenation.module.scss';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface PagenationProps {
  currentPage: number; // 0부터 시작
  totalPages: number;
  first: boolean;
  last: boolean;
  onPageChange: (page: number) => void;
}

export const BoardPagenation = ({
  currentPage,
  totalPages,
  first,
  last,
  onPageChange,
}: PagenationProps) => {
  // 현재 페이지
  const displayPage = currentPage + 1;

  // 페이지 번호에 배열 생성
  const pageNumbers = [];
  if (totalPages <= 0) {
    pageNumbers.push(1);
  } else {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className={styles.container}>
      <button
        onClick={() => !first && onPageChange(currentPage - 1)}
        disabled={first}
        className={styles.arrow}
      >
        <IoChevronBack size={12} />
      </button>

      {pageNumbers.map(pageNum => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum - 1)}
          className={`${styles.page} ${displayPage === pageNum ? styles.active : ''}`}
        >
          {pageNum}
        </button>
      ))}

      <button
        onClick={() => !last && onPageChange(currentPage + 1)}
        disabled={last}
        className={styles.arrow}
      >
        <IoChevronForward size={12} />
      </button>
    </div>
  );
};
