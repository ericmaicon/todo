import styled from 'styled-components';
import { PopoverProps } from './Popover';

export const StyledPopover = styled.div<PopoverProps>`
  background-color: #fff;
  border: 1px solid #cecece;
  border-radius: .3rem;
  color: #000;
  padding: 10px;

  &::before {
    background-color: #fff;
    border-style: solid;
    border-color: #cecece;
    border-width: .1rem .1rem 0 0;
    content: '';
    display: inline-block;
    height: 0.45em;
    left: 30%;
    position: relative;
    top: -16px;
    transform: rotate(-45deg);
    vertical-align: top;
    width: 0.45em;
  }
`;
