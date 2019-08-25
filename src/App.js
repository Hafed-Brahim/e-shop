import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIn from './components/sign-in/sign-in.component';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path = '/' component = {HomePage}/>
        <Route exact path = '/sign' component = {SignIn}/>
      </Switch>
    </div>
  );
}

export default App;
