// React
import React from 'react';
import PropTypes from 'prop-types';

// Models && Collections
import PlayersCollection from '../../collections/Players';

// Components
import PlayerCard from "./PlayerCard"
import Breadcrumb from '../Breadcrumb';

const Players = (props) => {
  const crumbs = [
    ['Home', '/'],
    ['Players', '/players']
  ];

  return (
    <div className="
      flex flex-col
      p-3 md:px-16 md:py-8
    ">
      <Breadcrumb crumbs={crumbs} />
      <div className="Players
        h-full w-full">
        <div className="
          flex flex-row flex-wrap
        ">
          {props.players.map((player, key) =>
            <PlayerCard key={key}
              player={player} />
          )}
        </div>
      </div>
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.instanceOf(PlayersCollection).isRequired
};

export default Players
