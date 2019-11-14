import React from "react";
import PropTypes from "prop-types";

import HeaderBar from './HeaderBar';

const Dashboard = (props) => {
  return (
    <div className="Dashboard
      flex flex-col md:flex-row
    ">
      <HeaderBar player={props.player}/>
    </div>
  );
};

Dashboard.propTypes = {
  player: PropTypes.object.isRequired,
  games: PropTypes.array.isRequired,
  matches: PropTypes.array.isRequired
};

export default Dashboard
