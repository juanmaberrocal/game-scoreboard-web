// React
import React from 'react';
import PropTypes from 'prop-types';

// Models && Collections
import Player from '../../models/Player';

// Components
import HeaderBar from './HeaderBar';
import LastMatchesList from './LastMatchesList';
import PendingMatchesList from './PendingMatchesList';
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
        <div className="
          flex flex-col flex-no-wrap
          w-full h-auto
        ">
          <PendingMatchesList
            matches={props.pendingMatches}
            doRefresh={props.doRefresh} />
        </div>
        <div className="
          flex flex-col flex-no-wrap
          w-full h-auto
        ">
          <PlayerStatistics
            player={props.player}
            layout="cols" />
        </div>
        <div className="
          flex flex-col flex-no-wrap
          w-full h-auto
        ">
          <LastMatchesList matches={props.confirmedMatches} />
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  player: PropTypes.instanceOf(Player).isRequired,
  pendingMatches: PropTypes.array.isRequired,
  confirmedMatches: PropTypes.array.isRequired,
  doRefresh: PropTypes.func.isRequired,
};

export default Dashboard
