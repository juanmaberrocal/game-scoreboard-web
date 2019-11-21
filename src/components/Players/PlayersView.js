import React from "react";
import PropTypes from "prop-types";

import PlayerCard from './PlayerCard'

const Players = (props) => (
  <div className="Players
    h-full w-full
    p-3 md:px-16 md:py-8">
    <h1 className="pb-3 text-xl font-medium">Players</h1>
    <div className="
      flex flex-row flex-wrap
    ">
      {props.players.map((player, key) =>
        <PlayerCard key={key}
          player={player} />
      )}
    </div>
  </div>
);

Players.propTypes = {
  players: PropTypes.array.isRequired
};

export default Players
