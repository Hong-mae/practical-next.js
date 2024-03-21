import styled from '@emotion/styled';
import React from 'react';

interface Props {
  title: string;
}

export const Title = ({ title }: Props) => {
  return <Label>{title}</Label>;
};

const Label = styled.h1`
  margin-bottom: 32px;
`;
