import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faEnvelope,
  faLock,
  faSpinner,
  faStar,
  faUser
} from '@fortawesome/free-solid-svg-icons'

import Routes from "../../routes/Routes";
import withSplashScreen from '../SplashScreen';
import Modal from '../Modal';

library.add(faEnvelope, faLock, faSpinner, faStar, faUser);

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
