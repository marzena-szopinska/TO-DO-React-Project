import React from 'react';

function ToDoItem(props) {

  const completedStyle = {
    color: 'gray',
    textDecoration: 'line-through',
    fontStyle: 'italic'
  };

  return (
    <div className='item'>
      <input type='checkbox' checked={props.task.completed} onChange={() => props.handleChange(props.task.id)}/>
      <p style={props.task.completed ? completedStyle : null}>{props.task.text}</p>
      <br />
    </div>
  );
}


export default ToDoItem;
