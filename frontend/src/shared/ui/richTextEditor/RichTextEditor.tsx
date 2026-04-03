import styles from './RichTextEditor.module.scss';
import { EditorContent } from '@tiptap/react';
import { useRichTextEditor } from '@/shared/lib/tiptap';
import { EditorToolbar } from './EditorToolbar';
import { Button } from '../button';
import { useNavigate } from 'react-router-dom';

interface RichTextEditorProps {
  content?: string;
  editable?: boolean;
  placeholder?: string;
  onChange?: (html: string) => void;
  onImageUpload?: (file: File) => Promise<string>;
}

export const RichTextEditor = ({
  content = '',
  editable = true,
  onChange,
  onImageUpload,
}: RichTextEditorProps) => {
  const navigate = useNavigate();

  const editor = useRichTextEditor({
    content,
    editable,
    onUpdate: onChange,
  });

  // useEditor는 비동기로 초기화되므로 초기 렌더링 시 null일 수 있음
  if (!editor) return null; // 런타임 오류 방지 코드

  // 취소 버튼 클릭 시 alert 메시지
  const handleCancel = () => {
    if (window.confirm('작성하신 내용이 사라집니다. 정말 취소하시겠습니까?')) {
      navigate('/notice', { replace: true });
    }
  };

  return (
    <>
      <div className={styles.editorWrapper}>
        {editable && (
          <EditorToolbar
            editor={editor}
            onImageUpload={onImageUpload}
          />
        )}
        <EditorContent
          editor={editor}
          className={styles.editorContents}
        />
      </div>
      {/* 취소 / 작성 완료 버튼 */}
      <div className={styles.button}>
        <Button
          onClick={handleCancel}
          type="button"
          variant="cancel"
        >
          취소
        </Button>
        <Button variant="primary">작성 완료</Button>
      </div>
    </>
  );
};
