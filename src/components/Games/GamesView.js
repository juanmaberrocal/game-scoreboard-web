import React from "react";
import PropTypes from "prop-types";

import GameCard from "./GameCard"

const Games = (props) => (
  <div className="Games
    h-full w-full
    p-3 md:px-16 md:py-8">
    <h1 className="pb-3 text-xl font-medium">Games</h1>
    <div className="
      flex flex-row flex-wrap
    ">
      {props.games.map((game, key) =>
        <GameCard key={key}
          game={game} />
      )}
    </div>
  </div>
);

Games.propTypes = {
  games: PropTypes.array.isRequired
};

export default Games
