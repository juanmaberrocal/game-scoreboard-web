import React from "react";
import PropTypes from "prop-types";

import GamesPlayedCard from './GamesPlayedCard';
import WinPercentageCard from './WinPercentageCard';
import WinPieChart from './WinPieChart';

const PlayerStatistics = (props) => {
  const rowLayout = props.layout === "rows";
  const breakdown = props.statistics.breakdown;
  const totalPlayed = props.statistics.total_played;
  const totalWon = props.statistics.total_won;

  return (
    <div className={`
      ${rowLayout ? "md:flex-row" : "md:flex-col"}
      flex
      flex-row flex-wrap
      h-auto md:h-screen w-full
    `}>
      <div className={`
        ${rowLayout ? "md:w-1/2 md:h-1/5 md:pr-1" : "md:w-1/5 md:h-1/2 md:pr-0"}
        pb-3 pr-1
        w-1/2 h-32
      `}>
        <GamesPlayedCard played={totalPlayed} />
      </div>
      <div className={`
        ${rowLayout ? "md:w-1/2 md:h-1/5 md:pl-1" : "md:w-1/5 md:h-1/2 md:pl-0"}
        pb-3 pl-1
        w-1/2 h-32
      `}>
        <WinPercentageCard played={totalPlayed} won={totalWon} />
      </div>
      <div className={`
        ${rowLayout ? "md:w-full md:h-4/5" : "md:w-4/5 md:h-full md:pl-3"}
        md:pb-3
        w-full h-64
      `}>
        <WinPieChart breakdown={breakdown} />
      </div>
    </div>
  );
};

PlayerStatistics.propTypes = {
  statistics: PropTypes.object.isRequired
};

export default PlayerStatistics
