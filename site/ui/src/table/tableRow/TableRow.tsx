import React from 'react';
import { StyledTd } from './style';

export interface TableRowProps {
  items: { [key: string]: string }[]
}

const TableRow: React.SFC<TableRowProps> = ({
  items,
}) => (
    <tbody
    >
      {items.map((item: { [key: string]: string }) => (
        <tr>
          {Object.keys(item).map((key: string) => (<StyledTd>{item[key]}</StyledTd>))}
        </tr>
      ))}
    </tbody>);

export default TableRow;
