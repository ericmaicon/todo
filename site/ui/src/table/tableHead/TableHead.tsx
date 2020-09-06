import React from 'react';
import { StyledTh } from './style';

export interface TableHeadProps {
  headers: string[]
}

const TableHead: React.SFC<TableHeadProps> = ({
  headers,
  ...props
}) => (
    <thead
      {...props}
    >
      <tr>
        {headers.map((header, key) => <StyledTh key={key}>{header}</StyledTh>)}
      </tr>
    </thead>);

export default TableHead;
