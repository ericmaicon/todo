import React from 'react';
import { Meta, Story } from '@storybook/react';
import AlertComponent, { AlertProps } from './Alert';

export default {
  title: 'Layout/Alert',
  component: AlertComponent,
} as Meta;

const Template: Story<AlertProps> = () => (<AlertComponent>Alert</AlertComponent>);

export const Alert = Template.bind({});
