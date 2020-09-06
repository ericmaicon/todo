import React from 'react';
import { StyledTable } from './style';

export interface TableProps {
  children?: React.ReactNode;
}

const Table: React.SFC<TableProps> = ({
  children,
  ...props
}) => (
    <StyledTable
      {...props}
    >
      {children}
    </StyledTable>);

export default Table;
