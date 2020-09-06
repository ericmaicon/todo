import React from 'react';
import {
  Container, Head,
} from '@site/ui';
import { containerStyle } from './style';
import { TaskForm, TaskList } from './component';

function Index(): React.SFC {
  return (
    <Container style={containerStyle}>
      <Head>TODO - Task managment</Head>

      <TaskList />
      <TaskForm />
    </Container>
  );
}

export default Index;
