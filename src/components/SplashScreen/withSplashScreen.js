import React from 'react';
import { connect } from 'react-redux';

import { authActions } from '../../redux/actions'
import SplashScreen from './SplashScreenContainer'

/*
 withSplashScreen is a wrapper component that is called
 as a function with the component to be "wrapped"
 NOTE: it is intended to wrap the `App.js` component as a landing page
 for the application to pull together all the necessary data
 */
function withSplashScreen(WrappedComponent) {
  return connect(null, mapDispatchToProps)(SplashScreen(WrappedComponent));
}

const mapDispatchToProps = (dispatch) => (
  {
    renew: () => (dispatch(authActions.renew()))
  }
);

export default withSplashScreen;
