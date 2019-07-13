import React from 'react';
import './App.css';
import './smart-grid.css'

function App() {
  
  const numbers = new Array(50);
  for (let i = 1; i < numbers.length; i++) {
    numbers[i] = i;  
  } 
  const listItems = numbers.map((number) =>
    <div key={number} style={{border: "solid 1px black"}} className="styling one">{number}</div>
  );

  return (
    <div className="App">
      <ul>{listItems}</ul>
      <div className="main">
      <div style={{border: "solid 1px black"}} className="styling one">1</div>
      <div style={{border: "solid 1px black"}} className="styling one">2</div>
      <div style={{border: "solid 1px black"}} className="styling one">4</div>
      <div style={{border: "solid 1px black"}} className="styling one">3</div>
      <div style={{border: "solid 1px black"}} className="styling one">5</div>
      <div style={{border: "solid 1px black"}} className="styling one">6</div>
      <div style={{border: "solid 1px black"}} className="styling one">7</div>
      <div style={{border: "solid 1px black"}} className="styling one">8</div>
      <div style={{border: "solid 1px black"}} className="styling one">9</div>
      <div style={{border: "solid 1px black"}} className="styling one">10</div>
      <div style={{border: "solid 1px black"}} className="styling one">11</div>
      <div style={{border: "solid 1px black"}} className="styling one">12</div>
      </div>
    </div>
  );
}

export default App;
