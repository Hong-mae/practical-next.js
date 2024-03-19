import { ShowInputButton } from 'components';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Title } from 'components/Title';
import { ToDoListContext } from 'contexts';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const ToDoInput = () => {
  const navigator = useNavigate();
  const [toDo, setToDo] = useState('');
  const { onAdd } = useContext(ToDoListContext);

  const onAddToDo = () => {
    if (toDo === '') return;

    onAdd(toDo);
    setToDo('');
    navigator('/');
  };

  return (
    <Container>
      <Contents>
        <Title text="할 일 추가" />
        <InputContainer>
          <Input value={toDo} onChange={setToDo} />
          <Button label="추가" color="#304ffe" onClick={onAddToDo} />
        </InputContainer>
      </Contents>
      <ShowInputButton show={true} onClick={() => navigator('/')} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
