import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from './Input';

export default {
  title: 'Form/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Large = Template.bind({});
Large.args = { inputSize: 'lg' };

export const Medium = Template.bind({});
Medium.args = { inputSize: 'md' };

export const Small = Template.bind({});
Small.args = { inputSize: 'sm' };
