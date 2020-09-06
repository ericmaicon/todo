import React from 'react';
import { StyledContainer } from './style';

export interface ContainerProps {
  fluid?: boolean;
  children?: React.ReactNode;
}

const Container: React.SFC<ContainerProps> = ({
  children,
  fluid = false,
  ...props
}) => (
    <StyledContainer
      fluid={fluid}
      {...props}
    >
      {children}
    </StyledContainer>);

export default Container;
