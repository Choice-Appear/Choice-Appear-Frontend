import styles from './LinkButton.module.scss';
import { useState, useRef, useEffect } from 'react';
import type { Editor } from '@tiptap/core';

interface LinkButtonProps {
  editor: Editor;
}

export const LinkButton = ({ editor }: LinkButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  // 팝업 열릴 때 현재 링크 URL 불러오기
  const handleOpen = () => {
    const currentUrl = editor.getAttributes('link').href ?? '';
    setUrl(currentUrl);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setUrl('');
  };

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

  const handleSubmit = () => {
    if (!url.trim()) {
      // URL이 비어있으면 링크 제거
      editor.chain().focus().unsetLink().run();
      handleClose();
      return;
    }

    editor.chain().focus().setLink({ href: url }).run();
    handleClose();
  };

  return (
    <div
      ref={containerRef}
      className={styles.linkWrapper}
    >
      <button
        type="button"
        onClick={handleOpen}
        aria-label="링크 삽입"
        aria-expanded={isOpen}
        aria-pressed={editor.isActive('link')}
        className={`${styles.toolbarBtn} ${editor.isActive('link') ? styles.isActive : ''}`}
      >
        링크
      </button>

      {isOpen && (
        <div
          className={styles.linkPopup}
          role="dialog"
          aria-label="링크 입력"
        >
          <input
            type="url"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="https://"
            onKeyDown={e => {
              if (e.key === 'Enter') handleSubmit();
              if (e.key === 'Escape') handleClose();
            }}
            autoFocus
          />
          <div className={styles.linkActions}>
            {editor.isActive('link') && (
              <button
                type="button"
                onClick={() => {
                  editor.chain().focus().unsetLink().run();
                  handleClose();
                }}
              >
                링크 제거
              </button>
            )}
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
