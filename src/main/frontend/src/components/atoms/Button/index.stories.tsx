import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    onClick: fn(),
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};
