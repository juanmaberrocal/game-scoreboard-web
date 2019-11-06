import React, { Component } from 'react';

import Routes from "../../routes/Routes";
import withSplashScreen from '../SplashScreen';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default withSplashScreen(App);
