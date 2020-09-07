import React from 'react';
import { StyledPopover } from './style';

export interface PopoverProps {
  children?: React.ReactNode;
}

const Popover: React.SFC<PopoverProps> = ({
  children,
  ...props
}) => (
    <StyledPopover
      {...props}
    >
      {children}
    </StyledPopover>);

export default Popover;
