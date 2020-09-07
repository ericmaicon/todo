import React, { useState } from 'react';
import {
  Form, FormGroup, Label, Input, Button, Alert,
} from '@site/ui';
import { formStyle } from './style';
import { useAsync, useNonEmptyEffect } from '../../../hook';
import { TaskFactory } from '../../../factory';

interface TaskFormParams {
  fetchTasks: () => void;
}

const defaultState = {
  title: '',
  description: '',
};

const TaskForm: React.FunctionComponent<TaskFormParams> = ({ fetchTasks }) => {
  const [values, setValues] = useState(defaultState);
  const {
    value: taskValue, execute, pending, error,
  } = useAsync(TaskFactory.createTask, false);

  useNonEmptyEffect(() => {
    setValues(defaultState);
    fetchTasks();
  }, [taskValue]);

  function handleChangeField(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    execute(values);
  }

  return (
    <Form style={formStyle} onSubmit={handleSubmit}>
      {error && (
        <Alert>{error.message}</Alert>
      )}
      <FormGroup>
        <Label>Title:</Label>
        <Input name="title" onChange={handleChangeField} value={values.title} />
      </FormGroup>
      <FormGroup>
        <Label>Description:</Label>
        <Input name="description" onChange={handleChangeField} value={values.description} />
      </FormGroup>
      <FormGroup>
        <Button type="submit" appearance="success" disabled={pending}>Create a Task</Button>
      </FormGroup>
    </Form>
  );
};

export default TaskForm;
