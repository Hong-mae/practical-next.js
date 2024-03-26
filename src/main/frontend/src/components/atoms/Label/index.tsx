import React from 'react';
import styled from '@emotion/styled';

interface Props {
  readonly label: string;
}

export const Label = ({ label }: Props) => {
  return <Container>{label}</Container>;
};

const Container = styled.div`
  flex: 1;
  font-size: 1.2rem;
  margin-right: 16px;
`;
