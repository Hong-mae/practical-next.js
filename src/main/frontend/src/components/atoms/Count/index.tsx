import React from 'react';
import styled from '@emotion/styled';

interface Props {
  value: number;
}

export const Count = ({ value }: Props) => {
  return <Container>{value}</Container>;
};

const Container = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;
