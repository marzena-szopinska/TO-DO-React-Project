import React from 'react';

function ToDoItem() {
  return (
    <div className='item'>
      <input type='checkbox' id='shopping' name='to-do-user' value='shopping' />
      <label for='shopping'>Do Shopping</label>
      <br />
    </div>
  );
}


export default ToDoItem;
