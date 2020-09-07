import React from 'react';
import { pick } from 'lodash/fp';
import { StyledTd } from './style';

export interface TableRowProps {
  items: { [key: string]: string }[];
  columns: string[];
  onHoverIn?: (item: object, target?: any) => void;
  onHoverOut?: (item: object, target?: any) => void;
  rowStyle?: (item: object) => object;
  buttons?: (item: object) => string;
}

const TableRow: React.SFC<TableRowProps> = ({
  items,
  columns,
  onHoverIn,
  onHoverOut,
  rowStyle,
  buttons,
  ...props
}) => {
  const parsedItems = items.map((item) => pick(columns, item));

  function handleOnMouseOver(event: React.SyntheticEvent, index: number) {
    if (!onHoverIn) {
      return;
    }

    onHoverIn(items[index], event.target);
  }

  function handleOnMouseOut(event: React.SyntheticEvent, index: number) {
    if (!onHoverOut) {
      return;
    }

    onHoverOut(items[index], event.target);
  }

  return (
    <tbody
      {...props}
    >
      {parsedItems.map((item: { [key: string]: string }, index) => {
        let style = {};
        let renderedButtons = '';

        if (rowStyle) {
          style = rowStyle(items[index]);
        }

        if (buttons) {
          renderedButtons = buttons(items[index]);
        }

        return (
          <tr
            key={index}
            onMouseOver={(event) => handleOnMouseOver(event, index)}
            onMouseOut={(event) => handleOnMouseOut(event, index)}
            style={style}
          >
            {Object.keys(item).map((key: string) => (<StyledTd key={key}>{item[key]}</StyledTd>))}
            <StyledTd>{renderedButtons}</StyledTd>
          </tr>
        );
      })}
    </tbody>);
};

export default TableRow;
