import React from "react";

import logo from '../../assets/logo.png';
import './SplashScreen.css';

const SplashScreen = () => (
  <div className="splash-screen
    flex flex-col items-center justify-center
  ">
    <div className="
      flex flex-grow flex-col items-center justify-center
    ">
      <img src={logo} className="logo" alt="logo" />
      <div className="title">Game Scoreboard</div>
    </div>
    <div className="footer mt-auto">Developed by Saludzinho™</div>
  </div>
);

export default SplashScreen
