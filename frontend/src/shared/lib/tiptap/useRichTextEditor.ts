import { useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { Underline } from '@tiptap/extension-underline';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { TextAlign } from '@tiptap/extension-text-align';
import { Link } from '@tiptap/extension-link';
import { Image } from '@tiptap/extension-image';
import { FontSize } from './extension/fontSize';
import { FontFamily } from '@tiptap/extension-font-family';
import { Placeholder } from '@tiptap/extension-placeholder';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { Youtube } from '@tiptap/extension-youtube';

interface UseRichTextEditorOptions {
  content?: string;
  editable?: boolean;
  onUpdate?: (html: string) => void;
  placeholder?: string;
}

export const useRichTextEditor = ({
  content = '',
  editable = true,
  onUpdate,
  placeholder,
}: UseRichTextEditorOptions) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        link: false,
        underline: false,
      }),
      Underline,
      TextStyle,
      Color,
      FontSize,
      FontFamily,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        openOnClick: true, // 에디터 편집 중 수정 가능
        HTMLAttributes: {
          rel: 'noopener noreferrer',
          target: '_blank', // 새 탭에서 열리도록 설정
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'editor-image',
        },
      }),
      Placeholder.configure({
        placeholder: placeholder ?? '',
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableCell,
      TableHeader,
      Youtube.configure({
        HTMLAttributes: {
          class: 'editor-youtube',
        },
      }),
    ],
    content,
    editable,
    onUpdate: ({ editor }) => {
      onUpdate?.(editor.getHTML());
    },
  });

  return editor;
};
