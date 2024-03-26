import { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
