import styled from 'styled-components';
import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: 1px solid transparent;
  -webkit-transition: all .15s ease;
  transition: all .15s ease;

  &:hover, &:active, &:focus {
    filter: brightness(85%);
  }

  ${({ active }) => {
    if (active) {
      return 'filter: brightness(85%);';
    }

    return '';
  }}

  ${({ block }) => {
    if (block) {
      return `
        display: block;
        width: 100%;`;
    }

    return '';
  }}

  ${({ size }) => {
    switch (size) {
      case 'lg':
        return `
          padding: .5rem 1rem;
          font-size: 1.25rem;
          line-height: 1.5;
          border-radius: .3rem;`;
      case 'sm':
        return `
          padding: .25rem .5rem;
          font-size: .875rem;
          line-height: 1.5;
          border-radius: .2rem;`;
      case 'md':
      default:
        return `
          padding: .375rem .75rem;
          font-size: 1rem;
          line-height: 1.5;
          border-radius: .25rem;`;
    }
  }}

  ${({ appearance }) => {
    switch (appearance) {
      case 'secondary':
        return `
          color: #000;
          background-color: #F9F9ED;
          border-color: #F9F9ED;`;
      case 'success':
        return `
          color: #000;
          background-color: #DBF4A7;
          border-color: #DBF4A7;`;
      case 'danger':
        return `
          color: #fff;
          background-color: #dc3545;
          border-color: #dc3545;`;
      case 'warning':
        return `
          color: #212529;
          background-color: #ffc107;
          border-color: #ffc107;`;
      case 'info':
        return `
          color: #fff;
          background-color: #D9DBF1;
          border-color: #D9DBF1;`;
      case 'primary':
      default:
        return `
          color: #fff;
          background-color: #8E9DCC;
          border-color: #8E9DCC;`;
    }
  }}
`;
