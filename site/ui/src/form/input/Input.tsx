import React from 'react';
import { StyledInput } from './style';

export interface InputProps {
  readonly?: boolean;
  inputSize?: 'lg' | 'md' | 'sm';
}

const Input: React.SFC<InputProps> = ({
  readonly,
  inputSize = 'lg',
  ...props
}) => (
    <StyledInput
      readonly={readonly}
      inputSize={inputSize}
      {...props}
    />);

export default Input;
