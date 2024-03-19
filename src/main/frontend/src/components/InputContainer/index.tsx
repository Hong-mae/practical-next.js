import { ShowInputButton } from 'components/ShowInputButton';
import { ToDoInput } from 'components/ToDoInput';
import React, { useState } from 'react';

interface Props {
  readonly onAdd: (toDo: string) => void;
}

export const InputContainer = ({ onAdd }: Props) => {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onAddToDo = (toDo: string) => {
    onAdd(toDo);
    setShowToDoInput(false);
  };

  return (
    <>
      {showToDoInput && <ToDoInput onAdd={onAddToDo} />}
      <ShowInputButton show={showToDoInput} onClick={() => setShowToDoInput(!showToDoInput)} />
    </>
  );
};
