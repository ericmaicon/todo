import React from 'react';
import { Meta, Story } from '@storybook/react';
import FormComponent, { FormProps } from './Form';
import FormGroup from '../formGroup/FormGroup';
import Input from '../input/Input';
import Label from '../label/Label';
import Button from '../button/Button';

export default {
  title: 'Form/Form',
  component: FormComponent,
} as Meta;

const Template: Story<FormProps> = () => (
  <FormComponent>
    <FormGroup>
      <Label>Field</Label>
      <Input />
    </FormGroup>
    <FormGroup>
      <Button>Send</Button>
    </FormGroup>
  </FormComponent>
);

export const Form = Template.bind({});
