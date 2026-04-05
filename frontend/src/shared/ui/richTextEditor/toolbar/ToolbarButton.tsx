import styles from './ToolbarButton.module.scss';
import type React from 'react';

interface ToolbarButtonProps {
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
