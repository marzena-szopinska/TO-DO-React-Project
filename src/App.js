import React from 'react';

function App() {

  const styles = {
    fontSize: 30,
    color: 'pink'
  }

  return (
    <div>
      <h1 style={styles}>To Do List</h1>
      <input type='checkbox' id='shopping' name='to-do-user' value='shopping' /><label for='shopping'>Do Shopping</label>
      <br />
      <input type='checkbox' id='walk' name='to-do-user' value='walk' /><label for='walk'>Walk The Dog</label>
      <br />
      <input type='checkbox' id='visit' name='to-do-user' value='visit' /><label for='visit'>Visit Family</label>
      <br />
      <input type='checkbox' id='yoga' name='to-do-user' value='yoga' /><label for='yoga'>Do Yoga</label>
    </div>
  );
}

export default App;
