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
          <Logo style={{fill: '#F0EADC'}} className="logo two"/>
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
          <div 
            className="lead twelve"
            style={{gridArea: '3 / 1 / 7 / 13'}}
            >
            <p>MODERN TYPOGRAPHY IS ABOUT THE ZEITGEIST AND NERVE OF TIME. SPEED IS THE ACUITY OF THE IMAGE.</p>
            <p style={{marginTop: '12px'}}>СОВРЕМЕННАЯ ТИПОГРАФИКА – ЭТО ПРО ДУХ И НЕРВ ВРЕМЕНИ. СКОРОСТЬ – ЭТО ОСТРОТА ОБРАЗА.</p>
            <p style={{marginTop: '12px'}}>EXPERIMENTAL CYRILLIC TYPEFACES<br/>
               ЭКСПЕРИМЕНТАЛЬНЫЕ КИРИЛЛИЧЕСКИЕ ШРИФТЫ</p>
          </div>
          <div style={{gridArea: '6 / 1 / 6 / 13', alignSelf: 'end', justifySelf: 'center'}} className="full-name twelve">THE REAL PLAY TYPEFOUNDRY</div>
          <div  className="font-list twelve">
            <FontList/>
          </div>
        </div>
        

       
    </React.Fragment>
  );
}

export default App;
