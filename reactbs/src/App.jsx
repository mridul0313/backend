import React, { useState } from 'react';

const App = () => {
  const [ab, setA] = useState(10); // Initialize state with 10

  const ChangeA = () => {
    setA(20); // Update state to 20
  };

  return (
    <div>
      <h1>Value of a is {ab}</h1> {/* Display the value of `ab` */}
      <button onClick={ChangeA}>ChangeA</button> {/* Use `onClick` for event handling */}
      <button onClick={()=>{setA+10}}>increment</button>
      <button onClick={()=>{setA-10}}>decrement</button>
    </div>
  );
};

export default App;