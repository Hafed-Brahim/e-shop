import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = () => (
  <h1>hats page !!</h1>
)

function App() {
  return (
    <Switch>
      <Route exact path = '/' component = {HomePage}/>
      <Route exact path = '/shop/hats' component = {HatsPage}/>
    </Switch>
  );
}

export default App;
