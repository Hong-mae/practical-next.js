import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  args: {
    onChange: fn(),
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '리액트 공부하기',
  },
};
