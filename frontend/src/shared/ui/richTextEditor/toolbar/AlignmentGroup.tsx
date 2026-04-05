import type { Editor } from '@tiptap/core';
import { ToolbarButton } from './ToolbarButton';
import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react';

interface AlignmentGroupProps {
  editor: Editor;
}

export const AlignmentGroup = ({ editor }: AlignmentGroupProps) => {
  return (
    <>
      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        isActive={editor.isActive({ textAlign: 'left' })}
        label="왼쪽 정렬"
      >
        <AlignLeft width={20} />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        isActive={editor.isActive({ textAlign: 'center' })}
        label="가운데 정렬"
      >
        <AlignCenter width={20} />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        isActive={editor.isActive({ textAlign: 'right' })}
        label="오른쪽 정렬"
      >
        <AlignRight width={20} />
      </ToolbarButton>
    </>
  );
};
