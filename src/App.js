import React from 'react';
import ToDoItem from './components/ToDoItem';

import todosData from './todosData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
  }

  render() {
    const todosComponents = this.state.todos.map(function(task){
      return <ToDoItem key={task.id} text={task.text} completed={task.completed}/>
    });

    return (
      <div className='todo-list'>
        <h1 className='title'>To Do List</h1>
        {todosComponents}
      </div>
    );
  }
}

export default App;
