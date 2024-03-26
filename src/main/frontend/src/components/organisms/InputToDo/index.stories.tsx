import { Meta, StoryObj } from '@storybook/react';

import { InputToDo } from '.';

const meta: Meta<typeof InputToDo> = {
  title: 'Organisms/InputToDo',
  component: InputToDo,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
