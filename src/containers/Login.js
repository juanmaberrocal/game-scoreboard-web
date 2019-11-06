import React, { Component } from "react";
import { connect } from 'react-redux';

import logo from '../logo.png';
// import "./Home.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render () {
    return (
      <div className="Login">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
            <img src={logo} className="logo" alt="logo" />
            <div className="title">Game Scoreboard</div>
          </div>
          <div className="footer mt-auto">Developed by Saludzinho™</div>
        </div>
        <div className="lander">
          <h1>LOGIN</h1>
          <p>A simple note taking app</p>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(Login);
