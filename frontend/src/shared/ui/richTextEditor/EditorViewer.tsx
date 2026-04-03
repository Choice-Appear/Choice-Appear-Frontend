import styles from './EditorViewer.module.scss';
import DOMPurify from 'dompurify';

interface EditorViewerProps {
  content: string;
}

export const EditorViewer = ({ content }: EditorViewerProps) => {
  const sanitized = DOMPurify.sanitize(content);

  return (
    <div
      className={styles.editorViewer}
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
};
