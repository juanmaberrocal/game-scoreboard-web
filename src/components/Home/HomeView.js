import React from "react";
import PropTypes from "prop-types";

import Routes from "../../routes/RoutesDashboard";
import NavBar from './NavBar/'

const Home = (props) => (
  <div className="Home
    flex flex-col md:flex-row
  ">
    <div className="
      w-full md:w-1/6
      h-16 md:h-screen
      overflow-y-visible md:overflow-y-auto
    ">
      <NavBar player={props.player} />
    </div>
    <div className="
      w-full md:w-5/6
      h-screen
      overflow-y-auto
      bg-gray-300
    ">
      <Routes />
    </div>
  </div>
);

Home.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default Home;
