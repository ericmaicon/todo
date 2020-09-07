import React, { useState } from 'react';
import {
  Table, TableHead, TableRow, Popover,
} from '@site/ui';
import { TaskListButton } from '.';

interface TaskListProps {
  tasks: [];
  fetchTasks: () => void;
}

const initialState = {
  x: null,
  y: null,
  description: null,
};

const TaskList: React.FunctionComponent<TaskListProps> = ({ tasks, fetchTasks }) => {
  const [activeDescription, setActiveDescription] = useState(initialState);

  function handleRowStyle({ status }) {
    switch (status) {
      case 'done':
        return {
          textDecoration: 'line-through',
        };
      case 'in-progress':
        return {
          color: '#DBF4A7',
        };
      case 'pending':
      default:
        return {
          color: '#ffc107',
        };
    }
  }

  function handleHoverIn({ description }, target) {
    const { x, y } = target.getBoundingClientRect();
    setActiveDescription({ description, x, y });
  }

  function handleHoverOut() {
    setActiveDescription(initialState);
  }

  const { x, y, description } = activeDescription;

  return (
    <div style={{ position: 'relative' }}>
      <Table>
        <TableHead headers={['Title', 'Status', 'Action']} />
        <TableRow
          items={tasks} columns={['title', 'status']}
          rowStyle={handleRowStyle}
          onHoverIn={handleHoverIn}
          onHoverOut={handleHoverOut}
          buttons={(item) => <TaskListButton item={item} fetchTasks={fetchTasks} />}
        />
      </Table>
      {description && <Popover style={{ position: 'absolute', left: x - 50, top: y - 220 }}>{description}</Popover>}
    </div>
  );
};

export default TaskList;
