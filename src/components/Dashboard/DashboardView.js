import React from "react";
import PropTypes from "prop-types";

import HeaderBar from './HeaderBar';
import GamesPlayedCard from './GamesPlayedCard';
import WinPercentageCard from './WinPercentageCard';
import WinPieChart from './WinPieChart';

const Dashboard = (props) => {
  return (
    <div className="Dashboard
      flex flex-col
    ">
      <HeaderBar player={props.player}/>
      <div className="
        flex flex-col flex-no-wrap
        h-full w-full
        p-3 md:px-16 md:py-8
      ">
        <div className="hidden
          w-full border bg-white rounded shadow mb-3
        ">HEADER</div>
        <div className="
          flex flex-row md:flex-col flex-wrap
          h-auto md:h-screen
        ">
          <GamesPlayedCard matches={props.matches} />
          <WinPercentageCard matches={props.matches} />
          <WinPieChart games={props.games} matches={props.matches} />
        </div>
        <div className="hidden
          w-full border bg-white rounded shadow
        "> FOOTER </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  player: PropTypes.object.isRequired,
  games: PropTypes.array.isRequired,
  matches: PropTypes.array.isRequired
};

export default Dashboard
