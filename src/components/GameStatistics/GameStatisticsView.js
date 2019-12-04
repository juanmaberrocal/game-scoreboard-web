import React from "react";
import PropTypes from "prop-types";

import Leaderboard from './Leaderboard';
import PercentileCards from './PercentileCards';

const GameStatistics = (props) => {
  const leaderboard = props.statistics.leaderboard;
  const percentiles = props.statistics.percentiles;

  return (
    <div className="GameStatistics
    ">
      <Leaderboard leaderboard={leaderboard} />
      <PercentileCards percentiles={percentiles} />
    </div>
  );
};

GameStatistics.propTypes = {
  statistics: PropTypes.object.isRequired
};

export default GameStatistics
