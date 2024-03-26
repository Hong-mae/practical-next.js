import React from 'react';
import styled from '@emotion/styled';

export const NotFound = () => {
  return (
    <Container>
      404
      <br />
      NOT FOUND
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #eee;
`;
