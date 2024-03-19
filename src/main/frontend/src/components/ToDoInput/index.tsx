import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Title } from 'components/Title';
import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  readonly onAdd: (toDo: string) => void;
}

export const ToDoInput = ({ onAdd }: Props) => {
  const [toDo, setToDo] = useState('');

  const onAddToDo = () => {
    if (toDo === '') return;

    onAdd(toDo);
    setToDo('');
  };

  return (
    <Container>
      <Background />
      <Contents>
        <Title text="할 일 추가" />
        <InputContainer>
          <Input value={toDo} onChange={setToDo} />
          <Button label="추가" color="#304ffe" onClick={onAddToDo} />
        </InputContainer>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 / 75%);
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
