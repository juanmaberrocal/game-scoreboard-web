import React from "react";

import logo from '../../assets/logo.png';
import './SplashScreen.css';

const SplashScreen = () => (
  <div className="splash-screen d-flex flex-column align-items-center justify-content-center">
    <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
      <img src={logo} className="logo" alt="logo" />
      <div className="title">Game Scoreboard</div>
    </div>
    <div className="footer mt-auto">Developed by Saludzinho™</div>
  </div>
);

export default SplashScreen
