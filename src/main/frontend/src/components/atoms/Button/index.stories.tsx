import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  args: { onClick: fn() },
  //   tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const DeleteButton: Story = {
  args: {
    label: '삭제',
  },
};

export const AddButton: Story = {
  args: {
    label: '추가',
    color: '#304ffe',
  },
};
