import styled from 'styled-components';
import { LabelProps } from './Label';

export const StyledLabel = styled.label<LabelProps>`
  display: inline-block;
  margin-bottom: .5rem;
  padding-top: calc(.375rem + 1px);
  padding-bottom: calc(.375rem + 1px);
`;
