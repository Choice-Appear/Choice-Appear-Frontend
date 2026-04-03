import styles from './EditorToolbar.module.scss';
import type { Editor } from '@tiptap/core';
import {
  ColorPickerButton,
  FontFamilySelect,
  FontSizeSelect,
  HeadingSelect,
  ImageUploadButton,
  LinkButton,
  TablePickerButton,
  ToolbarButton,
  VideoUploadButton,
} from './toolbar';

import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
} from 'lucide-react';

interface EditorToolbarProps {
  editor: Editor;
  onImageUpload?: (file: File) => Promise<string>;
}

export const EditorToolbar = ({
  editor,
  onImageUpload,
}: EditorToolbarProps) => {
  return (
    <div className={styles.editorToolbar}>
      {/* 1행 - 삽입 기능 */}
      <div className={styles.editorToolbarRow}>
        {/* 이미지 */}
        <ImageUploadButton
          editor={editor}
          onUpload={onImageUpload}
        />

        {/* 동영상 */}
        <VideoUploadButton editor={editor} />

        {/* 링크 */}
        <LinkButton editor={editor} />

        {/* 표 */}
        <TablePickerButton editor={editor} />

        {/* 구분선 */}
        <ToolbarButton
          editor={editor}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          label="구분선"
        >
          구분선
        </ToolbarButton>
      </div>

      {/* 2행 - 텍스트 서식 */}
      <div className={styles.editorToolbarRow}>
        {/* 제목 */}
        <HeadingSelect editor={editor} />

        {/* 글씨체 드롭다운 */}
        <FontFamilySelect editor={editor} />

        {/* 폰트 크기 드롭다운 */}
        <FontSizeSelect editor={editor} />

        {/* 폰트 굵기 */}
        <ToolbarButton
          editor={editor}
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          label="굵게"
        >
          <span style={{ fontWeight: 'bold', fontSize: '18px' }}>B</span>
        </ToolbarButton>

        <ToolbarButton
          editor={editor}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
          label="기울임"
        >
          <span style={{ fontStyle: 'italic', fontSize: '18px' }}>I</span>
        </ToolbarButton>

        <ToolbarButton
          editor={editor}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive('underline')}
          label="밑줄"
        >
          <span style={{ textDecoration: 'underline', fontSize: '16px' }}>
            U
          </span>
        </ToolbarButton>

        <ToolbarButton
          editor={editor}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive('strike')}
          label="취소선"
        >
          <span style={{ textDecoration: 'line-through', fontSize: '18px' }}>
            A
          </span>
        </ToolbarButton>

        {/* 글자색 */}
        <ColorPickerButton editor={editor} />

        {/* 글자 정렬 */}
        <ToolbarButton
          editor={editor}
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          isActive={editor.isActive({ textAlign: 'left' })}
          label="왼쪽 정렬"
        >
          <AlignLeft width={20} />
        </ToolbarButton>

        <ToolbarButton
          editor={editor}
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          isActive={editor.isActive({ textAlign: 'center' })}
          label="가운데 정렬"
        >
          <AlignCenter width={20} />
        </ToolbarButton>

        <ToolbarButton
          editor={editor}
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          isActive={editor.isActive({ textAlign: 'right' })}
          label="오른쪽 정렬"
        >
          <AlignRight width={20} />
        </ToolbarButton>

        {/* 글머리 목록 */}
        <ToolbarButton
          editor={editor}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
          label="글머리 목록"
        >
          <List width={20} />
        </ToolbarButton>

        <ToolbarButton
          editor={editor}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
          label="번호 목록"
        >
          <ListOrdered width={20} />
        </ToolbarButton>
      </div>
    </div>
  );
};
