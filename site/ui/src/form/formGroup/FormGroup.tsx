import React from 'react';
import { StyledFormGroup } from './style';

export interface FormGroupProps {
}

const FormGroup: React.SFC<FormGroupProps> = ({
  children,
}) => (
    <StyledFormGroup
    >
      {children}
    </StyledFormGroup>);

export default FormGroup;
