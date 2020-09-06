import React from 'react';
import { StyledButton } from './style';

export interface ButtonProps {
  active?: boolean;
  appearance?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  block?: boolean;
  children?: React.ReactNode;
  size?: 'lg' | 'md' | 'sm';
}

const Button: React.SFC<ButtonProps> = ({
  children,
  active = false,
  appearance = 'primary',
  block = false,
  size = 'lg',
  ...props
}) => (
    <StyledButton
      active={active}
      appearance={appearance}
      block={block}
      size={size}
      {...props}
    >
      {children}
    </StyledButton>);

export default Button;
