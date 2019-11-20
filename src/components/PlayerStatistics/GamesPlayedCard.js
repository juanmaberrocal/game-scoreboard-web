import React from "react";
import PropTypes from "prop-types";

const GamesPlayedCard = (props) => {
  return (
    <div className="GamesPlayedCard
      flex flex-col items-stretch
      w-1/2 md:w-1/5
      h-32 md:h-1/2
      pr-1 md:px-0 md:pb-3
    ">
      <h3 className="w-full flex-grow-0 text-sm font-medium">Games Played</h3>
      <div className="w-full border bg-white rounded shadow flex flex-grow items-center justify-center">
        <div className="text-6xl m-auto">{props.played}</div>
      </div>
    </div>
  );
};

GamesPlayedCard.propTypes = {
  played: PropTypes.number.isRequired
};

export default GamesPlayedCard
