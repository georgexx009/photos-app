import { RefObject } from 'react';
import styles from './Button.module.scss';

type DefaultBtnProps = Omit<JSX.IntrinsicElements['button'], 'type'>;

export interface BtnProps extends DefaultBtnProps {
  children: React.ReactNode;
  handleClick?: () => void;
  type?: string;
  variant?: 'primary' | 'secondary';
  ref?: ((instance: HTMLButtonElement) => void) | RefObject<HTMLButtonElement>;
  size?: 'default' | 'large';
}

export const Button = ({
  children,
  handleClick = () => {},
  type,
  disabled,
  variant = 'primary',
  size = 'default',
  ...restProps
}: BtnProps) => {
  return (
    <button
    onClick={handleClick}
    // variant={variant}
    disabled={disabled}
    // size={size}
    className='btn'
    {...restProps}
  >
    {children}
  </button>
  )
}