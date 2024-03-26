import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ToDoItem } from '.';

const meta: Meta<typeof ToDoItem> = {
  title: 'Organisms/ToDoItem',
  component: ToDoItem,
  args: {
    onDelete: fn(),
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '리액트 공부하기',
  },
};
