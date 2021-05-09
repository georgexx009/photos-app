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

const getBtnColor = (variant: BtnProps['variant'], disabled: BtnProps['disabled']) => {
  if (disabled) {
    return 'bg-gray-300'
  }
  return variant === 'primary' ? 'bg-blue-600' : 'bg-gray-600'
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
  const bgColor = getBtnColor(variant, disabled)

  return (
    <button
    onClick={handleClick}
    // variant={variant}
    disabled={disabled}
    // size={size}
    className={`btn ${bgColor}`}
    // style={disabled && { cursor: 'not-allowed', backgroundColor: 'gray' }}
    {...restProps}
  >
    {children}
  </button>
  )
}