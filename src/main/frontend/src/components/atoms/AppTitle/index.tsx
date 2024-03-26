import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AppTitle = () => {
  return <Container to="/">할 일 목록 앱</Container>;
};

const Container = styled(Link)`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
`;
