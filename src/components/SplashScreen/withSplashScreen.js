import React from 'react';
import { connect } from 'react-redux';

import { authActions } from '../../redux/actions'
import SplashScreen from './SplashScreenContainer'

function withSplashScreen(WrappedComponent) {
  return connect(null, mapDispatchToProps)(SplashScreen(WrappedComponent));
}

const mapDispatchToProps = (dispatch) => (
  {
    renew: () => (dispatch(authActions.renew()))
  }
);

export default withSplashScreen;
