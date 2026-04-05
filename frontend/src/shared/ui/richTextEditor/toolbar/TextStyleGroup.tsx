import type { Editor } from '@tiptap/core';
import { ToolbarButton } from './ToolbarButton';

interface TextStyleGroupProps {
  editor: Editor;
}

export const TextStyleGroup = ({ editor }: TextStyleGroupProps) => {
  return (
    <>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive('bold')}
        label="굵게"
      >
        <span style={{ fontWeight: 'bold', fontSize: '18px' }}>B</span>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive('italic')}
        label="기울임"
      >
        <span style={{ fontStyle: 'italic', fontSize: '18px' }}>I</span>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        isActive={editor.isActive('underline')}
        label="밑줄"
      >
        <span style={{ textDecoration: 'underline', fontSize: '16px' }}>U</span>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive('strike')}
        label="취소선"
      >
        <span style={{ textDecoration: 'line-through', fontSize: '18px' }}>
          A
        </span>
      </ToolbarButton>
    </>
  );
};
