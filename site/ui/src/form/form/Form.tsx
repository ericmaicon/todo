import React from 'react';
import { StyledForm } from './style';

export interface FormProps {
  children?: React.ReactNode;
}

const Form: React.SFC<FormProps> = ({
  children,
  ...props
}) => (
    <StyledForm
      {...props}
    >
      {children}
    </StyledForm >);

export default Form;
