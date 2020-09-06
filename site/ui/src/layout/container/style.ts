import styled from 'styled-components';
import { ContainerProps } from './Container';

export const StyledContainer = styled.div<ContainerProps>`
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  ${({ fluid }) => {
    if (fluid) {
      return 'width: 100%;';
    }

    return `
      @media (min-width: 768px) {
        width: 750px;
      }
      @media (min-width: 992px) {
        width: 970px;
      }
      @media (min-width: 1200px) {
        width: 1170px;
      }`;
  }}
`;