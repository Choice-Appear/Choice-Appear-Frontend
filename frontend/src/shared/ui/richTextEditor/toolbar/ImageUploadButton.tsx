import toolbarStyle from './ToolbarButton.module.scss';
import { useRef } from 'react';
import type { Editor } from '@tiptap/core';

interface ImageUploadButtonProps {
  editor: Editor;
  onUpload?: (file: File) => Promise<string>; // 서버 업로드 후 URL 반환
}

export const ImageUploadButton = ({
  editor,
  onUpload,
}: ImageUploadButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onUpload) return;

    try {
      const url = await onUpload(file);
      editor.chain().focus().setImage({ src: url }).run();
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
    } finally {
      // 같은 파일 재선택 가능하도록 input 초기화
      e.target.value = '';
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label="이미지 삽입"
        className={toolbarStyle.toolbarBtn}
      >
        사진
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </>
  );
};
