import React from 'react';
import styled from 'styled-components';

interface Props {
  readonly text: string;
}

export const Title = ({ text }: Props) => {
  return (
    <Container>
      <Label>{text}</Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.h1`
  margin-top: 0;
`;
