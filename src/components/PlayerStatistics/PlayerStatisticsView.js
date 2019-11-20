import React from "react";
import PropTypes from "prop-types";

import GamesPlayedCard from './GamesPlayedCard';
import WinPercentageCard from './WinPercentageCard';
import WinPieChart from './WinPieChart';

const PlayerStatistics = (props) => {
  const breakdown = props.statistics.breakdown;
  const totalPlayed = props.statistics.total_played;
  const totalWon = props.statistics.total_won;

  return (
    <div className="
      flex flex-row md:flex-col flex-wrap
      h-auto md:h-screen w-full
    ">
      <GamesPlayedCard played={totalPlayed} />
      <WinPercentageCard played={totalPlayed} won={totalWon} />
      <WinPieChart breakdown={breakdown} />
    </div>
  );
};

PlayerStatistics.propTypes = {
  statistics: PropTypes.object.isRequired
};

export default PlayerStatistics
