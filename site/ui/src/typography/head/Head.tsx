import React from 'react';
import { StyledHead } from './style';

export interface HeadProps {
}

const Head: React.SFC<HeadProps> = ({
  children,
}) => (
    <StyledHead
    >
      {children}
    </StyledHead>);

export default Head;
