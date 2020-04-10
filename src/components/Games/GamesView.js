// React
import React from 'react';
import PropTypes from 'prop-types';

// Models && Collections
import GamesCollection from '../../collections/Games';

// Components
import GameCard from "./GameCard"
import Breadcrumb from '../Breadcrumb';

const Games = (props) => {
  const crumbs = [
    ['Home', '/'],
    ['Games', '/games']
  ];

  return (
    <div className="
      flex flex-col
      p-3 md:px-16 md:py-8
    ">
      <Breadcrumb crumbs={crumbs} />
      <div className="Games
        h-full w-full">
        <div className="
          flex flex-row flex-wrap
        ">
          {props.games.map((game, key) =>
            <GameCard key={key}
              game={game} />
          )}
        </div>
      </div>
    </div>
  );
};

Games.propTypes = {
  games: PropTypes.instanceOf(GamesCollection).isRequired
};

export default Games
