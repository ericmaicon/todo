import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Form/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = { appearance: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { appearance: 'secondary' };

export const Success = Template.bind({});
Success.args = { appearance: 'success' };

export const Danger = Template.bind({});
Danger.args = { appearance: 'danger' };

export const Warning = Template.bind({});
Warning.args = { appearance: 'warning' };
