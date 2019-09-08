import React from 'react';

import './App.scss';
import './smart-grid.css'

import Grid from './Grid';

import {ReactComponent as Logo} from './Images/kiosk_logo_color.svg'
import {ReactComponent as LogoSign} from './Images/kiosk_sign.svg'
import FontList from './Components/FontList/FontList';

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
              width: "156",
              height: '156',
              fill: '#F0EADC',
              gridColumn: "11 / 13",
              gridRow: "1 / 3"
            }}/>
          <div  className="twelve" style={{marginTop: "50px"}}>
            <FontList/>
          </div>
        </div>
        

       
    </React.Fragment>
  );
}

export default App;
