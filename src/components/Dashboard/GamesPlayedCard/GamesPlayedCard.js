import React from "react";
import PropTypes from "prop-types";

const GamesPlayedCard = (props) => {
  const matchesPlayed = props.matches.length;

  return (
    <div className="GamesPlayedCard
      flex flex-col items-stretch
      w-1/2 md:w-1/5
      h-1/2
      pb-3
    ">
      <h3 className="w-full flex-grow-0 text-sm font-medium">Games Played</h3>
      <div className="w-full border bg-white rounded shadow flex-grow">
        {matchesPlayed}
      </div>
    </div>
  );
};

GamesPlayedCard.propTypes = {
  matches: PropTypes.array.isRequired
};

export default GamesPlayedCard
