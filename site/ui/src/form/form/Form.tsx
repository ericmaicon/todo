import React from 'react';
import { StyledForm } from './style';

export interface FormProps {
}

const Form: React.SFC<FormProps> = ({
  children,
}) => (
    <StyledForm
    >
      {children}
    </StyledForm>);

export default Form;
