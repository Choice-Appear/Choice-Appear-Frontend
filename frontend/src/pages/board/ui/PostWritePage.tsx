import { useCallback, useRef } from 'react';
import { PostEditor } from '@/features/boardOptions';

export const PostWritePage = () => {
  const contentRef = useRef('');

  const handleContentChange = useCallback((html: string) => {
    contentRef.current = html;
  }, []);

  return (
    <PostEditor
      content={contentRef.current}
      onContentChange={handleContentChange}
    />
  );
};
