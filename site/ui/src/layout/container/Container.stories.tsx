import styled from 'styled-components';
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Container, { ContainerProps } from './Container';

export default {
  title: 'Layout/Container',
  component: Container,
} as Meta;

const StyledContent = styled.div`
  background: #D9DBF1;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <StyledContent>Container</StyledContent>
  </Container>
);

export const FixedContainer = Template.bind({});

export const ResponsiveContainer = Template.bind({});
ResponsiveContainer.args = { fluid: true };
