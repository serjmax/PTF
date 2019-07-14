import React from 'react';

import './App.scss';
import './smart-grid.css'

import Grid from './Grid';
import FontExample from './Components/FontExample/FontExample';

import {ReactComponent as Logo} from './Images/kiosk_logo_color.svg'
import {ReactComponent as LogoSign} from './Images/KW kiosk sign.svg'

function App() {

  return (
    <React.Fragment>
        <Grid/>
        <div className="App main">
          <Logo className="two"/>
          <div 
            style={{
              gridColumn: "1 / 3",
              gridRow: "2 / 4"
            }}>
            <div>FONTS</div>
            <div>INFO</div>
            <div>GOODS</div>
            <div>PLAYTYPE</div>
          </div>
          <LogoSign 
            style={{
              gridColumn: "11 / 13",
              gridRow: "1 / 3"
            }}/>
          <div  className="twelve" style={{marginTop: "50px"}}>
            <FontExample/>
          </div>
        </div>
        

       
    </React.Fragment>
  );
}

export default App;
