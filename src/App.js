import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

//function App() {
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ ShopPage } />
        <Route path='/signin' component={ SignInAndSignUpPage } />
        </Switch>
      </div>
    );
  }
}

/* 
 * You really only need Route with exact path for simple routing for SPA.
 * However, if you use Route but don't use exact path and instead use 
 * only path, then it will render all the components in a greedy manner.
 * You can use Switch to render the first 'path' (not exact path) instead.
 *
 */

export default App;
