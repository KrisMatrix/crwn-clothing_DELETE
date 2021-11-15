import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={ HomePage } />
      <Route path='/shop' component={ ShopPage } />
      <Route path='/signin' component={ SignInAndSignUpPage } />
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
