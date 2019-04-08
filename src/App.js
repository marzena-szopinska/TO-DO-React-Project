import React from 'react';
import ToDoItem from './components/ToDoItem';

import todosData from './todosData';

function App() {

  const todosComponents = todosData.map(function(task){
    return <ToDoItem key={task.id} text={task.text} completed={task.completed}/>
  });

  return (
    <div className='todo-list'>
      <h1 className='title'>To Do List</h1>
      {todosComponents}
    </div>
  );
}

export default App;
