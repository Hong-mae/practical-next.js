import { Meta, StoryObj } from '@storybook/react';

import { NotFound } from '.';

const meta: Meta<typeof NotFound> = {
  title: 'Pages/NotFound',
  component: NotFound,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
