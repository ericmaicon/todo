import React from 'react';
import { Meta, Story } from '@storybook/react';
import TableComponent, { TableProps } from './Table';
import TableHead from '../tableHead/TableHead';
import TableRow from '../tableRow/TableRow';

export default {
  title: 'Table/Table',
  component: TableComponent,
} as Meta;

const Template: Story<TableProps> = (args) => (<TableComponent {...args}>
  <TableHead headers={['First', 'Second', 'Third']} />
  <TableRow items={[
    {
      id: 'first',
      title: 'First Value',
      type: 'anything',
    },
    {
      id: 'second',
      title: 'Second Value',
      type: 'anything',
    },
    {
      id: 'third',
      title: 'Third Value',
      type: 'anything',
    },
  ]} />
</TableComponent>);

export const Table = Template.bind({});
