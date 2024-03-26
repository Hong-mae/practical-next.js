import { Meta, StoryObj } from '@storybook/react';

import { AppTitle } from '.';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof AppTitle> = {
  title: 'Atoms/AppTitle',
  component: AppTitle,
  parameters: {
    backgrounds: {
      default: 'Header background color',
      values: [
        { name: 'Header background color(Default)', value: '#304ffe' },
        { name: 'Header background color(Gray)', value: '#777' },
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
