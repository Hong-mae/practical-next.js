import { ShowInputButton } from 'components/ShowInputButton';
import { Title } from 'components/Title';
import { ToDoList } from 'components/ToDoList';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const DataView = () => {
  const navigator = useNavigate();
  return (
    <Container>
      <Title text="할 일 목록" />
      <ToDoList />
      <ShowInputButton show={false} onClick={() => navigator('/add')} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
`;
