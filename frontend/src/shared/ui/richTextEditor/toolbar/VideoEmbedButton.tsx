import styles from './VideoEmbedButton.module.scss';
import toolbarStyle from './ToolbarButton.module.scss';
import { useState, useRef, useEffect } from 'react';
import type { Editor } from '@tiptap/core';

interface VideoEmbedButtonProps {
  editor: Editor;
}

export const VideoEmbedButton = ({ editor }: VideoEmbedButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setUrl('');
  };

  const handleSubmit = () => {
    if (!url.trim()) return;

    editor.chain().focus().setYoutubeVideo({ src: url }).run();
    handleClose();
  };

  return (
    <div
      ref={containerRef}
      className={styles.videoUploadWrapper}
    >
      <button
        type="button"
        onClick={() => {
          setIsOpen(prev => !prev);
        }}
        aria-label="동영상 삽입"
        aria-expanded={isOpen}
        className={toolbarStyle.toolbarBtn}
      >
        동영상
      </button>

      {isOpen && (
        <div
          className={styles.videoUploadPopup}
          role="dialog"
          aria-label="YouTube URL 입력"
        >
          <input
            type="url"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="YouTube URL을 입력하세요"
            onKeyDown={e => {
              if (e.key === 'Enter') handleSubmit();
              if (e.key === 'Escape') handleClose();
            }}
            // 팝업 열릴 때 자동 포커스
            autoFocus
          />
          <div className={styles.videoUploadActions}>
            <button
              type="button"
              onClick={handleClose}
            >
              취소
            </button>
            <button
              type="button"
              onClick={handleSubmit}
            >
              삽입
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
