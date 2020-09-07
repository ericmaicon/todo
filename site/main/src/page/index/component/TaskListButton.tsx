import React, { useState } from 'react';
import {
  Button,
} from '@site/ui';
import { useAsync, useNonEmptyEffect } from '../../../hook';
import { TaskFactory } from '../../../factory';

interface TaskListProps {
  item: {
    id: number;
    status: string;
  };
  fetchTasks: () => void;
}

const TaskListButton: React.FunctionComponent<TaskListProps> = ({ item, fetchTasks }) => {
  const {
    value, execute, pending,
  } = useAsync(TaskFactory.updateStatusTask, false);

  useNonEmptyEffect(() => {
    fetchTasks();
  }, [value]);

  function handleChangeStatus() {
    switch (item.status) {
      case 'in-progress':
        execute({ id: item.id, status: 'done' });
        break;
      case 'pending':
      default:
        execute({ id: item.id, status: 'in-progress' });
        break;
    }
  }

  let label = 'Start task';
  if (item.status === 'done') {
    return null;
  }

  if (item.status === 'in-progress') {
    label = 'Finish task';
  }

  return (
    <Button size="xs" disabled={pending} onClick={handleChangeStatus}>{label}</Button>
  );
};

export default TaskListButton;
