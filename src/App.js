import React, { useState , useEffect } from 'react'
import randomcolor from 'randomcolor';
import './App.css';

function App() {
  const[value,setValue]=useState(0)

  function increase(){
   return(
     setValue(value + 1)
     ); 
  }

  function decrease(){
    return(
    setValue(value - 1)
    );
  }

  return (
    <div className="App">
      Current count: {value}
      <hr/>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
