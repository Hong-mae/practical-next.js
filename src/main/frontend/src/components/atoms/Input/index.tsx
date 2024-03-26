import React from 'react';
import styled from '@emotion/styled';

interface Props {
  value: string;
  onChange: (text: string) => void;
}

export const Input = ({ value, onChange }: Props) => {
  return <Container value={value} onChange={(event) => onChange(event.target.value)} />;
};

const Container = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`;
