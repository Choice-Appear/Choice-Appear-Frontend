import styles from './ToolbarButton.module.scss';
import type React from 'react';
import type { Editor } from '@tiptap/core';

interface ToolbarButtonProps {
  editor: Editor;
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
  label: string;
  children: React.ReactNode;
}

export const ToolbarButton = ({
  onClick,
  isActive = false,
  disabled = false,
  label,
  children,
}: ToolbarButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-pressed={isActive}
      className={`${styles.toolbarBtn} ${isActive ? styles.isActive : ''}`}
    >
      {children}
    </button>
  );
};
