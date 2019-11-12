import React from "react";
import { connect } from 'react-redux';

import NavLinks from './NavLinks';
import NavName from './NavName';
import NavPercentage from './NavPercentage';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <nav className="NavBar
      flex flew-row md:flex-col items-start md:items-center
      h-full
      bg-gray-700 text-gray-400
    ">
      <NavName player={props.player} />
      <NavPercentage />
      <NavLinks />
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    player: state.authReducer.player
  };
};

export default connect(mapStateToProps)(NavBar);
