import React from 'react';
import { StyledTable } from './style';

export interface TableProps {
}

const Table: React.SFC<TableProps> = ({
  children,
}) => (
    <StyledTable
    >
      {children}
    </StyledTable>);

export default Table;
