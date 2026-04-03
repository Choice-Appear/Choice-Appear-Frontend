import styles from './Select.module.scss';
import type { Editor } from '@tiptap/core';
import type React from 'react';

interface HeadingSelectProps {
  editor: Editor;
}

type HeadingLevel = 1 | 2 | 3;

const HEADING_OPTIONS = [
  { label: '본문', value: 'paragraph' },
  { label: '제목 1', value: 'heading1' },
  { label: '제목 2', value: 'heading2' },
  { label: '제목 3', value: 'heading3' },
] as const;

export const HeadingSelect = ({ editor }: HeadingSelectProps) => {
  const getCurrentValue = () => {
    if (editor.isActive('heading', { level: 1 })) return 'heading1';
    if (editor.isActive('heading', { level: 2 })) return 'heading2';
    if (editor.isActive('heading', { level: 3 })) return 'heading3';
    return 'paragraph';
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value === 'paragraph') {
      editor.chain().focus().setParagraph().run();
      return;
    }

    const level = Number(value.replace('heading', '')) as HeadingLevel;
    editor.chain().focus().toggleHeading({ level }).run();
  };

  return (
    <select
      value={getCurrentValue()}
      onChange={handleChange}
      aria-label="텍스트 스타일"
      className={styles.select}
    >
      {HEADING_OPTIONS.map(option => (
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
