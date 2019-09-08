import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.scss';

import Main from './pages/Main/Main'
import Manifesto from './pages/Manifesto/Manifesto'

function App() {

  return (
        <div className="App">
          <Router>
            <Route path="/" exact component={Main} />
            <Route path="/manifesto/" component={Manifesto} />   
         </Router> 
    </div>
  );
}

export default App;
