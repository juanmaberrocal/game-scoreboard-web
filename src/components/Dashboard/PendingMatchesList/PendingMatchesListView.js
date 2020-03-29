// Reach
import React from 'react';
import PropTypes from 'prop-types';

// Models && Collections
import Games from '../../../collections/Games';

// Utils
import { timestampToDate } from '../../../utils/DateTime';

const PendingMatchListItem = (props) => {
  const gameData = props.games.find((game) => (game.id === props.match.game.id));
  const gameName = gameData ? gameData.name : '';

  return (
    <button className="
      flex flex-col flex-no-wrap justify-center
      h-32 w-32 mr-3
      items-center border bg-white rounded shadow
      cursor-pointer
    ">
      <div>{gameName}</div>
      <div className="text-sm">{timestampToDate(props.match.played_on)}</div>
    </button>
  )
}

const PendingMatchesList = (props) => {
  const pendingMatches = props.matches.slice(0, 5);

  return (
    <div className="PendingMatchesList
      flex flex-col items-stretch
      w-full mb-3
    ">
      <h3 className="w-full flex-grow-0 text-sm font-medium">Pending Matches</h3>
      <div className="w-full flex flex-no-wrap flex-grow items-center justify-start">
        {pendingMatches.map((match, key) =>
          <PendingMatchListItem
            key={match.id}
            match={match}
            games={props.games} />
        )}
      </div>
    </div>
  );
};

PendingMatchesList.propTypes = {
  games: PropTypes.instanceOf(Games).isRequired,
  matches: PropTypes.array.isRequired
};

export default PendingMatchesList;
