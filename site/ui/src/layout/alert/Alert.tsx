import React from 'react';
import { StyledAlert } from './style';

export interface AlertProps {
  children?: React.ReactNode;
}

const Alert: React.SFC<AlertProps> = ({
  children,
  ...props
}) => (
    <StyledAlert
      {...props}
    >
      {children}
    </StyledAlert>);

export default Alert;
