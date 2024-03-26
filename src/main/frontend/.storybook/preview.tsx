import { Preview } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ToDoListContextProvider } from '../src/contexts/ToDoList';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ToDoListContextProvider>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ToDoListContextProvider>
    ),
  ],
};

export default preview;
