import styles from './ColorPickerButton.module.scss';
import toolbarStyle from './ToolbarButton.module.scss';
import type { Editor } from '@tiptap/core';
import { useEffect, useRef, useState } from 'react';

interface BackgroundColorPickerButtonProps {
  editor: Editor;
}

const BG_COLOR_PALETTE = [
  // 기본색
  '#000000',
  '#434343',
  '#666666',
  '#999999',
  '#b7b7b7',
  '#cccccc',
  '#d9d9d9',
  '#ffffff',

  // 빨강 계열
  '#ff0000',
  '#ff4444',
  '#ff9900',
  '#ffff00',
  '#ff00ff',
  '#ff66cc',
  '#ea4335',
  '#c62828',

  // 초록 계열
  '#00ff00',
  '#00cc00',
  '#008000',
  '#006600',
  '#34a853',
  '#1e8449',
  '#00bcd4',
  '#006064',

  // 파랑 계열
  '#0000ff',
  '#4444ff',
  '#0099ff',
  '#4285f4',
  '#1a73e8',
  '#0d47a1',
  '#673ab7',
  '#4a148c',
] as const;

export const BackgroundColorPickerButton = ({
  editor,
}: BackgroundColorPickerButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 현재 적용된 배경색
  const currentColor = editor.getAttributes('highlight').color ?? '#ffffff';

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
    editor.chain().focus().toggleHighlight({ color }).run();
    setIsOpen(false);
  };

  const handleUnsetColor = () => {
    editor.chain().focus().unsetHighlight().run();
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={styles.colorPickerWrapper}
    >
      {/* 배경색 버튼 */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="글자 배경색"
        aria-expanded={isOpen}
        className={toolbarStyle.toolbarBtn}
      >
        <span
          style={{
            fontSize: '16px',
            backgroundColor: 'yellow',
            padding: '0 4px',
          }}
        >
          A
        </span>
      </button>

      {/* 색상 팔레트 팝업 */}
      {isOpen && (
        <div
          className={styles.colorPalette}
          role="dialog"
          aria-label="글자 배경색 선택"
        >
          {/* 색상 초기화 버튼 */}
          <button
            type="button"
            onClick={handleUnsetColor}
            className={styles.colorResetBtn}
          >
            배경색 초기화
          </button>

          {/* 색상 그리드 */}
          <div className={styles.colorGrid}>
            {BG_COLOR_PALETTE.map(color => (
              <button
                key={color}
                type="button"
                onClick={() => handleColorSelect(color)}
                aria-label={`배경색 ${color}`}
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
