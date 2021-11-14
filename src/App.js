import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={ HomePage } />
      <Route path='/hats' component={ HatsPage } />
      </Switch>
    </div>
  );
}

/* 
 * You really only need Route with exact path for simple routing for SPA.
 * However, if you use Route but don't use exact path and instead use 
 * only path, then it will render all the components in a greedy manner.
 * You can use Switch to render the first 'path' (not exact path) instead.
 *
 */

export default App;
