import styles from './Select.module.scss'
import type { Editor } from '@tiptap/core';
import type React from 'react';

interface FontFamilySelectProps {
  editor: Editor;
}

const FONT_FAMILY_OPTIONS = [
  { label: '기본서체', value: '' },
  { label: '나눔고딕', value: 'Nanum Gothic, sans-serif' },
  { label: '나눔명조', value: 'Nanum Myeongjo, serif' },
  { label: '맑은 고딕', value: 'Malgun Gothic, sans-serif' },
  { label: 'Arial', value: 'Arial, sans-serif' },
  { label: 'Georgia', value: 'Georgia, serif' },
] as const;

export const FontFamilySelect = ({ editor }: FontFamilySelectProps) => {
  // 현재 커서 위치의 textStyle 마크에 적용된 attribute 값 읽기
  // fontFamily, fontSize, color등의 값 가져옴
  const getCurrentValue = () => {
    const attrs = editor.getAttributes('textStyle');
    return attrs.fontFamily ?? '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    // 빈 문자열이면 기본 서체 적용
    if (!value) {
      editor.chain().focus().unsetFontFamily().run();
      return;
    }

    editor.chain().focus().setFontFamily(value).run();
  };

  return (
    <select
      value={getCurrentValue()}
      onChange={handleChange}
      aria-label="글씨체"
      className={styles.select}
    >
      {FONT_FAMILY_OPTIONS.map(option => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};
