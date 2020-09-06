import React, { useState } from 'react';
import {
  Form, FormGroup, Label, Input, Button,
} from '@site/ui';
import { formStyle } from './style';

const defaultState = {
  title: '',
  description: '',
};

function TaskForm(): React.FC {
  const [values, setValues] = useState(defaultState);

  function handleChangeField(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setValues(defaultState);
  }

  return (
    <Form style={formStyle} onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Title:</Label>
        <Input name="title" onChange={handleChangeField} value={values.title} />
      </FormGroup>
      <FormGroup>
        <Label>Description:</Label>
        <Input name="description" onChange={handleChangeField} value={values.description} />
      </FormGroup>
      <FormGroup>
        <Button type="submit" appearance="success">Create a Task</Button>
      </FormGroup>
    </Form>
  );
}

export default TaskForm;
