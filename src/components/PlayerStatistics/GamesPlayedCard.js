// React
import React from 'react';
import PropTypes from 'prop-types';

const GamesPlayedCard = (props) => {
  return (
    <div className="GamesPlayedCard
      flex flex-col items-stretch
      h-full
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
