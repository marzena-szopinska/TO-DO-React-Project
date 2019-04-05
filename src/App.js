import React from 'react';
import ToDoItem from './components/ToDoItem';

function App() {
  return (
    <div className='todo-list'>
      <h1 className='title'>To Do List</h1>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export default App;
