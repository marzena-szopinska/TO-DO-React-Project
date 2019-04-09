import React from 'react';
import ToDoItem from './components/ToDoItem';

import todosData from './todosData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedToDos = prevState.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return { todos: updatedToDos }
    });
  }


  render() {
    const todosComponents = this.state.todos.map(task => <ToDoItem key={task.id} task={task} handleChange={this.handleChange}/>);

    return (
      <div className='todo-list'>
        <h1 className='title'>To Do List</h1>
        {todosComponents}
      </div>
    );
  }
}

export default App;
