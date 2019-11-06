import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faEnvelope,
  faLock
} from '@fortawesome/free-solid-svg-icons'

import Routes from "../../routes/Routes";
import withSplashScreen from '../SplashScreen';

import './App.css';

library.add(faEnvelope, faLock);

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