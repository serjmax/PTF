import React from 'react';
import './App.css';
import './smart-grid.css'

import Grid from './Grid';
function App() {
  
  const numbers = new Array(50);
  for (let i = 1; i < numbers.length; i++) {
    numbers[i] = i;  
  } 
  const listItems = numbers.map((number) =>
    <div key={number} style={{border: "solid 1px black"}} className="styling one">{number}</div>
  );

  return (
        <Grid/>
  );
}

export default App;
