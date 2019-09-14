import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {

    checkUserSession();

    /** handeling user authentication using observer pattern
     
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      }else {
        setCurrentUser(userAuth);
      }
    });

    */
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/sign'
          render={() =>
            currentUser
              ? <Redirect to='/' />
              : <SignInAndSignUp />}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
