import styles from './Select.module.scss';
import type { Editor } from '@tiptap/core';

interface FontSizeSelectProps {
  editor: Editor;
}

const FONT_SIZE_OPTIONS = [
  '10', '11', '12', '13', '14', '15', '16',
  '18', '20', '22', '24', '28', '36', '48',
] as const

export const FontSizeSelect = ({ editor }: FontSizeSelectProps) => {
  const getCurrentValue = () => {
    const attrs = editor.getAttributes('textStyle');
    return attrs.fontSize?.replace('px', '') ?? '15';  // 기본값
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    editor.chain().focus().setFontSize(`${value}px`).run();
  };

  return (
    <select
      value={getCurrentValue()}
      onChange={handleChange}
      aria-label="폰트 크기"
      className={styles.select}
    >
      {FONT_SIZE_OPTIONS.map(size => (
        <option
          key={size}
          value={size}
        >
          {size}
        </option>
      ))}
    </select>
  );
};
