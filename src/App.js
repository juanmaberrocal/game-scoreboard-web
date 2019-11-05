import React, { Component } from 'react';

import Routes from "./Routes";
import withSplashScreen from './components/withSplashScreen';

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
