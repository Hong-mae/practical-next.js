import styled from 'styled-components';
import { DataView, InputContainer } from 'components';
import { useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState(['리액트 공부하기', '지아님 좋아하기', '현아님 꼬시기']);

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <InputContainer onAdd={onAdd} />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

export default App;
