import React from 'react';

function ToDoItem(props) {
  return (
    <div className='item'>
      <input type='checkbox' checked={props.completed} onChange={() => {console.log('something changed!')}}/>
      <p>{props.text}</p>
      <br />
    </div>
  );
}


export default ToDoItem;
