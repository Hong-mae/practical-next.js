import { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { ToDoListContext } from 'contexts/ToDoList';
import { useNavigate } from 'react-router';

export const InputToDo = () => {
  const [toDo, setToDo] = useState('');
  const { onAdd } = useContext(ToDoListContext);
  const navigate = useNavigate();

  const onAddToDo = () => {
    if (toDo === '') return;

    onAdd(toDo);
    setToDo('');
    navigate('/');
  };
  return (
    <Container>
      <Input value={toDo} onChange={setToDo} />
      <Button label="추가" color="#304ffe" onClick={onAddToDo} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
