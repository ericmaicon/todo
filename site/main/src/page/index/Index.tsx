import React from 'react';
import {
  Container, Head,
} from '@site/ui';
import { containerStyle } from './style';
import { TaskForm, TaskList } from './component';
import { useAsync } from '../../hook';
import { TaskFactory } from '../../factory';

function Index() {
  const { value, execute } = useAsync(TaskFactory.getTasks);

  function fetchTasks() {
    execute();
  }

  return (
    <Container style={containerStyle}>
      <Head>TODO - Task managment</Head>

      {!value && <p>You didn't created a task yet. How about create one now?</p>}
      {value && <TaskList tasks={value} fetchTasks={fetchTasks} />}
      <TaskForm fetchTasks={fetchTasks} />
    </Container>
  );
}

export default Index;
