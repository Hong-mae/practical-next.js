import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { ToDoItem } from '.';

describe('<ToDoItem />', () => {
  it('renders component coreectly', () => {
    const { container } = render(<ToDoItem label="default value" />);

    const toDoItem = screen.getByText('default value');
    expect(toDoItem).toBeInTheDocument();

    const deleteBtn = screen.getByText('삭제');
    expect(deleteBtn).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('clicks the delete button', () => {
    const handleClick = jest.fn();
    render(<ToDoItem label="default value" onDelete={handleClick} />);

    const deleteBtn = screen.getByText('삭제');
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(deleteBtn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
