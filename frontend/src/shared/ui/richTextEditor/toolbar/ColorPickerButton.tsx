import styles from './ColorPickerButton.module.scss';
import toolbarStyle from './ToolbarButton.module.scss';
import type { Editor } from '@tiptap/core';
import { useEffect, useRef, useState } from 'react';

interface ColorPickerButtonProps {
  editor: Editor;
}

const COLOR_PALETTE = [
  // 기본색
  '#000000', '#434343', '#666666', '#999999', '#b7b7b7', '#cccccc', '#d9d9d9', '#ffffff',

  // 빨강 계열
  '#ff0000', '#ff4444', '#ff9900', '#ffff00', '#ff00ff', '#ff66cc', '#ea4335', '#c62828',

  // 초록 계열
  '#00ff00', '#00cc00', '#008000', '#006600', '#34a853', '#1e8449', '#00bcd4', '#006064',

  // 파랑 계열
  '#0000ff', '#4444ff', '#0099ff', '#4285f4', '#1a73e8', '#0d47a1', '#673ab7', '#4a148c',
] as const

export const ColorPickerButton = ({ editor }: ColorPickerButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 현재 적용 글자색
  const currentColor = editor.getAttributes('textStyle').color ?? '#000000';

  // 팔레트 외부 클릭 시 닫기
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

  const handleColorSelect = (color: string) => {
    editor.chain().focus().setColor(color).run();
    setIsOpen(false);
  };

  const handleUnsetColor = () => {
    editor.chain().focus().unsetColor().run();
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={styles.colorPickerWrapper}
    >
      {/* 글자색 버튼 */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="글자색"
        aria-expanded={isOpen}
        className={toolbarStyle.toolbarBtn}
      >
        {/* 현재 색상을 버튼 하단에 표시 */}
        <span>A</span>
        <span
          className={styles.colorIndicator}
          style={{ backgroundColor: currentColor }}
        />
      </button>

      {/* 색상 팔레트 팝업 */}
      {isOpen && (
        <div
          className={styles.colorPalette}
          role="dialog"
          aria-label="글자색 선택"
        >
          {/* 색상 초기화 버튼 */}
          <button
            type="button"
            onClick={handleUnsetColor}
            className={styles.colorResetBtn}
          >
            기본색으로 초기화
          </button>

          {/* 색상 그리드 */}
          <div className={styles.colorGrid}>
            {COLOR_PALETTE.map(color => (
              <button
                key={color}
                type="button"
                onClick={() => handleColorSelect(color)}
                aria-label={color}
                className={`${styles.colorCell} ${currentColor === color ? styles.isSelected : ''}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
