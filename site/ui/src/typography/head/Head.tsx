import React from 'react';
import { StyledHead } from './style';

export interface HeadProps {
  children?: React.ReactNode;
}

const Head: React.SFC<HeadProps> = ({
  children,
  ...props
}) => (
    <StyledHead
      {...props}
    >
      {children}
    </StyledHead>);

export default Head;
