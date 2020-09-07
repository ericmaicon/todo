import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import PopoverComponent, { PopoverProps } from './Popover';

const StyledDiv = styled.div`
position: relative;
`;

export default {
  title: 'Layout/Popover',
  component: PopoverComponent,
} as Meta;

const Template: Story<PopoverProps> = () => (
  <StyledDiv>
    <PopoverComponent>Popover</PopoverComponent>
  </StyledDiv>
);

export const Popover = Template.bind({});
