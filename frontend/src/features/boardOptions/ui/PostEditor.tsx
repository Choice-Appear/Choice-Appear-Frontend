import { RichTextEditor } from '@/shared/ui/richTextEditor';

interface PostEditorProps {
  content?: string;
  onChange: (html: string) => void;
}

export const PostEditor = ({ content, onChange }: PostEditorProps) => {
  return (
    <RichTextEditor
      content={content}
      onChange={onChange}
      placeholder="내용을 입력하세요."
    />
  );
};
