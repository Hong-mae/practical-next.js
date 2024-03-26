import { Meta, StoryObj } from '@storybook/react';

import { ToDoInputPage } from '.';

const meta: Meta<typeof ToDoInputPage> = {
  title: 'Pages/ToDoInputPage',
  component: ToDoInputPage,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
