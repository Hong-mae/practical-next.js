import React from 'react';
import styled from 'styled-components';

interface Props {
  readonly data: number;
}

export const Label = ({ data }: Props) => {
  return <Container>{data}</Container>;
};

const Container = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;
