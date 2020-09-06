import React from 'react';
import { StyledFormGroup } from './style';

export interface FormGroupProps {
  children?: React.ReactNode;
}

const FormGroup: React.SFC<FormGroupProps> = ({
  children,
  ...props
}) => (
    <StyledFormGroup
      {...props}
    >
      {children}
    </StyledFormGroup>);

export default FormGroup;
