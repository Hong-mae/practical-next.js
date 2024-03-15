import React from 'react';
import 'jest-styled-components';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '.';

describe('<Input />', () => {
  it('renders component correctly', () => {
    const { container } = render(<Input value="default value" />);

    const input = screen.getByDisplayValue('default value');
    expect(input).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('renders placeholders correctly', () => {
    render(<Input placeholder="default placeholder" />);

    const input = screen.getByPlaceholderText('default placeholder');
    expect(input).toBeInTheDocument();
  });

  it('changes the data', () => {
    render(<Input placeholder="default placeholder" />);

    const input = screen.getByPlaceholderText('default placeholder') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'study react' } });
    expect(input.value).toBe('study react');
  });
});
