import React from 'react';
import { StyledTh } from './style';

export interface TableHeadProps {
  headers: string[]
}

const TableHead: React.SFC<TableHeadProps> = ({
  headers,
}) => (
    <thead
    >
      <tr>
        {headers.map((header) => <StyledTh>{header}</StyledTh>)}
      </tr>
    </thead>);

export default TableHead;
