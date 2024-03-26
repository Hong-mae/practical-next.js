import React from 'react';
import styled from '@emotion/styled';

interface Props {
  title: string;
}

export const PageTitle = ({ title }: Props) => {
  return <Container>{title}</Container>;
};

const Container = styled.h1`
  margin-top: 0;
`;
