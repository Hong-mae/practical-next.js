import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ToDoList } from '.';

const meta: Meta<typeof ToDoList> = {
  title: 'Templates/ToDoList',
  component: ToDoList,
  args: {
    onDelete: fn(),
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toDoList: ['리액트 공부하기', 'CDD 공부하기', '할 일 목록앱 개발하기'],
  },
};
