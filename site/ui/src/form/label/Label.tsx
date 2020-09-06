import React from 'react';
import { StyledLabel } from './style';

export interface LabelProps {
  children?: React.ReactNode;
}

const Label: React.SFC<LabelProps> = ({
  children,
}) => (
    <StyledLabel>
      {children}
    </StyledLabel>);

export default Label;
