// React
import React from 'react';
import PropTypes from 'prop-types';

// Models && Collections
import Games from '../../../collections/Games';

// Utils
import { timestampToDate } from '../../../utils/DateTime';

const PendingMatchListItem = (props) => {
  const match = props.match;
  const matchPlayer = match.firstResult();
  const game = props.games.findById(match.gameId());
  const gameName = game ? game.name : '';
  const bgColor = matchPlayer.winner ? 'green' : 'red';

  return (
    <button className={`
      PendingMatchListItem
      h-32 w-32 mr-3
      flex flex-col flex-no-wrap justify-center
      items-center rounded shadow
      bg-${bgColor}-100 border border-${bgColor}-900
      cursor-pointer
    `} onClick={() => props.onClick(game, match, matchPlayer)}>
      <div>{gameName}</div>
      <div className="text-sm">{timestampToDate(match.played_on)}</div>
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
            games={props.games}
            onClick={props.onClick} />
        )}
      </div>
    </div>
  );
};

PendingMatchesList.propTypes = {
  games: PropTypes.instanceOf(Games).isRequired,
  matches: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PendingMatchesList;
