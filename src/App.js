import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

import withSplashScreen from './components/withSplashScreen';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">Game Scoreboard</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar>
      </div>
    );
  }
}

export default withSplashScreen(App);
