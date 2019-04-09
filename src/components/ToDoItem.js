import React from 'react';

function ToDoItem(props) {
  return (
    <div className='item'>
      <input type='checkbox' checked={props.task.completed} onChange={(e) => props.handleChange(props.task.id)}/>
      <p>{props.task.text}</p>
      <br />
    </div>
  );
}


export default ToDoItem;
