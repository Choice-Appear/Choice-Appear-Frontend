import styles from './PostEditor.module.scss';
import { Button } from '@/shared/ui/button';
import { RichTextEditor } from '@/shared/ui/richTextEditor';
import { useNavigate } from 'react-router-dom';

interface PostEditorProps {
  content?: string;
  onChange: (html: string) => void;
}

export const PostEditor = ({ content, onChange }: PostEditorProps) => {
  const navigate = useNavigate();

  // 취소 버튼 클릭 시 alert 메시지
  const handleCancel = () => {
    if (window.confirm('작성하신 내용이 사라집니다. 정말 취소하시겠습니까?')) {
      navigate('/notice', { replace: true });
    }
  };

  return (
    <>
      <RichTextEditor
        content={content}
        onChange={onChange}
        placeholder="내용을 입력하세요."
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
        <Button variant="primary">작성 완료</Button>
      </div>
    </>
  );
};
