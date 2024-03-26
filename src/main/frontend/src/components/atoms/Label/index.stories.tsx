import { Meta, StoryObj } from '@storybook/react';

import { Label } from '.';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '리액트 공부하기',
  },
};
