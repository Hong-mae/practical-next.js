import styled from 'styled-components';
import { useState } from 'react';
import { ToDoListContextProvider } from 'contexts';
import { Route, Routes } from 'react-router-dom';
import { DataView, ToDoInput } from 'pages';
import { Header } from 'components';

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
      <ToDoListContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<DataView />} />
          <Route path="/add" element={<ToDoInput />} />
          <Route
            path="*"
            element={
              <NotFound>
                404
                <br />
                NOT FOUND
              </NotFound>
            }
          />
        </Routes>
      </ToDoListContextProvider>
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

const NotFound = styled.div`
  text-align: center;
`;

export default App;
