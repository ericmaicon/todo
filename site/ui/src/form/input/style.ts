import styled from 'styled-components';
import { InputProps } from './Input';

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  color: #495057;
  background-color: #fff;
  border: 1px solid #7D84B2;

  ${({ readonly }) => {
    if (readonly) {
      return `
        background-color: #e9ecef;
        opacity: 1;`;
    }

    return '';
  }}


  ${({ inputSize }) => {
    switch (inputSize) {
      case 'lg':
        return `
          height: calc(1.5em + 1rem + 2px);
          padding: .5rem 1rem;
          font-size: 1.25rem;
          line-height: 1.5;
          border-radius: .3rem;`;
      case 'sm':
        return `
          height: calc(1.5em + .5rem + 2px);
          padding: .25rem .5rem;
          font-size: .875rem;
          line-height: 1.5;
          border-radius: .2rem;`;
      case 'md':
      default:
        return `
          height: calc(1.5em + .75rem + 2px);
          padding: .375rem .75rem;
          font-size: 1rem;
          line-height: 1.5;
          border-radius: .25rem;`;
    }
  }}
`;
