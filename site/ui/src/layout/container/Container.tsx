import React from 'react';
import { StyledContainer } from './style';

export interface ContainerProps {
  fluid?: boolean
}

const Container: React.SFC<ContainerProps> = ({
  children,
  fluid = false,
}) => (
    <StyledContainer
      fluid={fluid}
    >
      {children}
    </StyledContainer>);

export default Container;
