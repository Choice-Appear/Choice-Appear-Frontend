import { List, ListOrdered } from 'lucide-react';
import { ToolbarButton } from './ToolbarButton';
import type { Editor } from '@tiptap/core';

interface ListGroupProps {
  editor: Editor;
}

export const ListGroup = ({ editor }: ListGroupProps) => {
  return (
    <>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive('bulletList')}
        label="글머리 목록"
      >
        <List width={20} />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive('orderedList')}
        label="번호 목록"
      >
        <ListOrdered width={20} />
      </ToolbarButton>
    </>
  );
};
