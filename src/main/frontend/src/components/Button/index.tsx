import React from 'react';
import styled from 'styled-components';

interface Props {
  readonly label: string;
  readonly color?: string;
  readonly onClick?: () => void;
}

interface ContainerProps {
  readonly color: string;
}

export const Button = ({ label, color = '#ff5722', onClick }: Props) => {
  return (
    <Container color={color} onClick={onClick}>
      {label}
    </Container>
  );
};

const Container = styled.div<ContainerProps>`
  border: 0;
  color: #fff;
  background-color: ${(props) => props.color};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.color};
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
