import React from "react";
import PropTypes from "prop-types";

import HeaderBar from './HeaderBar';
import LastMatchesList from './LastMatchesList';
import PlayerStatistics from '../PlayerStatistics';

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
        <PlayerStatistics
          player={props.player}
          layout="cols" />
        <div className="
          flex flex-col flex-no-wrap
          w-full h-auto
        ">
          <LastMatchesList games={props.games} matches={props.matches} />
        </div>
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
