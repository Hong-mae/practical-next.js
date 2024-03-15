import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import 'jest-styled-components';

describe('<App />', () => {
  it('renders component correctly', () => {
    const { container } = render(<App />);

    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
    expect(toDoList.firstChild).toBeNull();

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    expect(input).toBeInTheDocument();
    const label = screen.getByText('Add');
    expect(label).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('adds and deletes todo items', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    const button = screen.getByText('Add');
    fireEvent.change(input, { target: { value: 'study react1' } });
    fireEvent.click(button);

    const toDoItem = screen.queryByText('study react1');
    expect(toDoItem).toBeInTheDocument();
    const deleteBtn = screen.getByText('삭제');
    expect(deleteBtn).toBeInTheDocument();

    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList.childElementCount).toBe(1);

    fireEvent.change(input, { target: { value: 'study react2' } });
    fireEvent.click(button);

    const toDoItem2 = screen.getByText('study react2');
    expect(toDoItem2).toBeInTheDocument();
    expect(toDoList.childElementCount).toBe(2);

    const deleteBtns = screen.getAllByText('삭제');
    fireEvent.click(deleteBtns[0]);

    expect(toDoItem).not.toBeNull();
    expect(toDoList.childElementCount).toBe(1);
  });

  it('does not add emtpy ToDo', () => {
    render(<App />);

    const toDoList = screen.getByTestId('toDoList');
    const length = toDoList.childElementCount;

    const button = screen.getByText('Add');
    fireEvent.click(button);

    expect(toDoList.childElementCount).toBe(length);
  });
});
