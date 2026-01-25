import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'cancel';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'cancel',
  size = 'medium',
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]} ${styles[`button--${size}`]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
