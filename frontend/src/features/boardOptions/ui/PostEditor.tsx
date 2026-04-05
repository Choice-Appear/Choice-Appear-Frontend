import styles from './PostEditor.module.scss';
import { Button } from '@/shared/ui/button';
import { RichTextEditor } from '@/shared/ui/richTextEditor';
import type { Editor } from '@tiptap/react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface PostEditorProps {
  title: string;
  onTitleChange: (title: string) => void;
  content: string;
  onContentChange: (html: string) => void;
  onSubmit: () => void;
}

export const PostEditor = ({
  title,
  onTitleChange,
  content,
  onContentChange,
  onSubmit,
}: PostEditorProps) => {
  const navigate = useNavigate();
  const editorRef = useRef<Editor | null>(null);

  // 취소 버튼 클릭 시 alert 메시지
  const handleCancel = () => {
    if (window.confirm('작성하신 내용이 사라집니다. 정말 취소하시겠습니까?')) {
      navigate('/notice', { replace: true });
    }
  };

  // 제목 작성 후 Enter키 누르면 내용 작성 부분으로 포커스 이동
  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      editorRef.current?.commands.focus();
    }
  };

  return (
    <section>
      {/* 제목 */}
      <div className={styles.titleWrapper}>
        <input
          className={styles.titleInput}
          type="text"
          value={title}
          onChange={e => onTitleChange(e.target.value)}
          onKeyDown={handleTitleKeyDown}
          placeholder="제목을 입력하세요"
        />
      </div>

      {/* 에디터 */}
      <RichTextEditor
        content={content}
        onChange={onContentChange}
        placeholder="내용을 입력하세요."
        onEditorReady={editor => {
          editorRef.current = editor;
        }}
      />

      {/* 취소 / 작성 완료 버튼 */}
      <div className={styles.button}>
        <Button
          onClick={handleCancel}
          type="button"
          variant="cancel"
        >
          취소
        </Button>
        <Button onClick={onSubmit} variant="primary">작성 완료</Button>
      </div>
    </section>
  );
};
