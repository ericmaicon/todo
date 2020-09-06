import React from 'react';
import {
  Table, TableHead,
} from '@site/ui';

function TaskList(): React.FC {
  return (
    <Table>
      <TableHead headers={['Title', 'Status']} />
    </Table>
  );
}

export default TaskList;
