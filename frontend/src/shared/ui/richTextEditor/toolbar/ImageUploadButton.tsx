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

  const MAX_FILE_SIZE = 10 * 1024 * 1024;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 파일 사이즈 체크
    if (file.size > MAX_FILE_SIZE) {
      alert('이미지는 10MB 이하만 업로드할 수 있습니다.');
      e.target.value = '';
      return;
    }

    try {
      // base64Url 방식으로 이미지 업로드 구현
      // 저장소 확보 시 Pre-signed URL 방식으로 리팩토링 예정
      if (onUpload) {
        const url = await onUpload(file);
        editor.chain().focus().setImage({ src: url }).run();
      } else {
        const reader = new FileReader();
        reader.onload = () => {
          const base64Url = reader.result as string;
          editor.chain().focus().setImage({ src: base64Url }).run();
        };
        reader.readAsDataURL(file);
      }
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
