import React, { Component } from 'react';

import Routes from "../../routes/Routes";
import withSplashScreen from '../SplashScreen';
import Modal from '../Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
        <Modal />
      </div>
    );
  }
}

export default withSplashScreen(App);
