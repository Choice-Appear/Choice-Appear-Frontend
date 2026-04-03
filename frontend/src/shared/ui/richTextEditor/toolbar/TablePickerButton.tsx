import styles from './TablePickerButton.module.scss';
import toolbarStyle from './ToolbarButton.module.scss';
import type { Editor } from '@tiptap/core';
import { useEffect, useRef, useState } from 'react';

interface TablePickerButtonProps {
  editor: Editor;
}

const MAX_ROWS = 8;
const MAX_COLS = 8;

export const TablePickerButton = ({ editor }: TablePickerButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(0);
  const [hoveredCol, setHoveredCol] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 팝업 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setHoveredRow(0);
    setHoveredCol(0);
  };

  const handleCellHover = (row: number, col: number) => {
    setHoveredRow(row);
    setHoveredCol(col);
  };

  const handleCellClick = (row: number, col: number) => {
    editor
      .chain()
      .focus()
      .insertTable({ rows: row, cols: col, withHeaderRow: true })
      .run();
    handleClose();
  };

  return (
    <div
      ref={containerRef}
      className={styles.tablePickerWrapper}
    >
      {/* 표 삽입 버튼 */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="표 삽입"
        aria-expanded={isOpen}
        className={toolbarStyle.toolbarBtn}
      >
        표
      </button>

      {/* 표 크기 선택 정렬 */}
      {isOpen && (
        <div
          className={styles.tablePickerPopup}
          role="dialog"
          aria-label="표 크기 선택"
          onMouseLeave={handleClose}
        >
          {/* 선택 중인 크기 표시 */}
          <div className={styles.tablePickerLabel}>
            {hoveredRow > 0 && hoveredCol > 0
              ? `${hoveredRow} × ${hoveredCol}`
              : '표 크기 선택'}
          </div>

          {/* 그리드 */}
          <div className={styles.tablePickerGrid}>
            {Array.from({ length: MAX_ROWS }, (_, rowIdx) =>
              Array.from({ length: MAX_COLS }, (_, colIdx) => {
                const row = rowIdx + 1;
                const col = colIdx + 1;
                const isHighlighted = row <= hoveredRow && col <= hoveredCol;

                return (
                  <button
                    key={`${row}-${col}`}
                    type="button"
                    aria-label={`${row}행 ${col}열`}
                    className={`${styles.tablePickerCell} ${isHighlighted ? styles.isHighlighted : ''}`}
                    onMouseEnter={() => handleCellHover(row, col)}
                    onClick={() => handleCellClick(row, col)}
                  />
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};
