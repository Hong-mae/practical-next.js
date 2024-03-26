import { Header } from 'components/organisms/Header';
import { ToDoListContextProvider } from 'contexts/ToDoList';
import { NotFound } from 'pages/NotFound';
import { ToDoInputPage } from 'pages/ToDoInputPage';
import { ToDoListPage } from 'pages/ToDoListPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <ToDoListContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ToDoListPage />} />
          <Route path="/add" element={<ToDoInputPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ToDoListContextProvider>
  );
};

export default App;
