import styles from './EditorToolbar.module.scss';
import type { Editor } from '@tiptap/core';
import {
  AlignmentGroup,
  ColorPickerButton,
  FontFamilySelect,
  FontSizeSelect,
  HeadingSelect,
  ImageUploadButton,
  LinkButton,
  ListGroup,
  TablePickerButton,
  TextStyleGroup,
  ToolbarButton,
  VideoEmbedButton,
} from './toolbar';

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
        <VideoEmbedButton editor={editor} />

        {/* 링크 */}
        <LinkButton editor={editor} />

        {/* 표 */}
        <TablePickerButton editor={editor} />

        {/* 구분선 */}
        <ToolbarButton
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

        {/* 폰트 스타일 */}
        <TextStyleGroup editor={editor} />

        {/* 글자색 */}
        <ColorPickerButton editor={editor} />

        {/* 글자 정렬 */}
        <AlignmentGroup editor={editor} />

        {/* 글머리 목록 */}
        <ListGroup editor={editor} />
      </div>
    </div>
  );
};
