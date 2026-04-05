import { useCallback, useRef } from 'react';
import { PostEditor } from '@/features/boardOptions';

export const PostWritePage = () => {
  const contentRef = useRef('');

  const handleChange = useCallback((html: string) => {
    contentRef.current = html;
  }, []);

  return <PostEditor onChange={handleChange} />;
};
