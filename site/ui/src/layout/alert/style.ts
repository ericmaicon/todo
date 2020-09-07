import styled from 'styled-components';
import { AlertProps } from './Alert';

export const StyledAlert = styled.div<AlertProps>`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: .25rem;
`;
