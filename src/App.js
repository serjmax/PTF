import React from 'react';
import './App.css';

import './App.scss';
import './smart-grid.css'

import Grid from './Grid';
import FontExample from './Components/FontExample/FontExample';
import {ReactComponent as Logo} from './Images/kiosk_logo_color.svg'
import {ReactComponent as LogoSign} from './Images/KW kiosk sign.svg'
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
          <Logo className="two"/>
          <LogoSign 
            <FontExample/>
  );
}

export default App;
