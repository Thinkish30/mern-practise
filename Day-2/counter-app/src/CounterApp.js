import React, { useState } from 'react';
import './CounterApp.css';

function CounterApp() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1);
  }

   function decrement(){
    if(count === 0) return;
    setCount(count - 1);
  }

//   const decrement = () =>{
//     if(count === 0) return;                  // using a arrow function
//     setCount(count - 1);
//   }

  function reset(){
    setCount(0);
  }

  return (
    <div className='counter'>
      <h2>Count: {count}</h2>
      <button onClick={increment}>➕ Add</button>
      <button onClick={decrement}>➖ Subtract</button>
      <button onClick={reset}>🔁 Reset</button>
    </div>
  );
}

export default CounterApp; 
