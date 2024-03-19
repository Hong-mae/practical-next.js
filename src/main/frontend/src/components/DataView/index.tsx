import { Title } from 'components/Title';
import { ToDoList } from 'components/ToDoList';
import React from 'react';
import styled from 'styled-components';

interface Props {
  readonly toDoList: ReadonlyArray<string>;
  readonly onDelete?: (todo: string) => void;
}

export const DataView = ({ toDoList, onDelete }: Props) => {
  return (
    <Container>
      <Title text="할 일 목록" />
      <ToDoList toDoList={toDoList} onDelete={onDelete} />
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
