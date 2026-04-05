import styles from './RichTextEditor.module.scss';
import { Editor, EditorContent } from '@tiptap/react';
import { useRichTextEditor } from '@/shared/lib/tiptap';
import { EditorToolbar } from './EditorToolbar';
import { useEffect } from 'react';

interface RichTextEditorProps {
  content?: string;
  editable?: boolean;
  placeholder?: string;
  onChange?: (html: string) => void;
  onImageUpload?: (file: File) => Promise<string>;
  onEditorReady?: (editor: Editor) => void;
}

export const RichTextEditor = ({
  content = '',
  editable = true,
  onChange,
  onImageUpload,
  placeholder,
  onEditorReady,
}: RichTextEditorProps) => {
  const editor = useRichTextEditor({
    content,
    editable,
    onUpdate: onChange,
    placeholder,
  });

  useEffect(() => {
    if (editor && onEditorReady) {
      onEditorReady(editor);
    }
  }, [editor, onEditorReady]);

  if (!editor) return null;

  // useEditor는 비동기로 초기화되므로 초기 렌더링 시 null일 수 있음
  if (!editor) return null; // 런타임 오류 방지 코드

  return (
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
  );
};
