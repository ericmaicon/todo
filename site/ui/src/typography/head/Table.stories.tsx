import React from 'react';
import { Meta, Story } from '@storybook/react';
import HeadComponent, { HeadProps } from './Head';

export default {
  title: 'Typography/Head',
  component: HeadComponent,
} as Meta;

const Template: Story<HeadProps> = () => (<HeadComponent>Head</HeadComponent>);

export const Head = Template.bind({});
