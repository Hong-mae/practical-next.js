import { useContext } from 'react';
import { ToDoList } from 'components/templates/ToDoList';
import { ToDoListContext } from 'contexts/ToDoList';

export const ToDoListPage = () => {
  const { toDoList, onDelete } = useContext(ToDoListContext);
  return <ToDoList toDoList={toDoList} onDelete={onDelete} />;
};
