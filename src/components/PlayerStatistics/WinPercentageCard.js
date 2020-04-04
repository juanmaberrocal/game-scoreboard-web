// React
import React from 'react';
import PropTypes from 'prop-types';

const WinPercentageCard = (props) => {
  const winPercentage = ((props.won/props.played) * 100);
  const bgColor = winPercentage > 30 ? 'green' : winPercentage > 20 ? 'yellow' : 'red';

  return (
    <div className="WinPercentageCard
      flex flex-col
      h-full
    ">
      <h3 className="w-full flex-grow-0 text-sm font-medium">Win Percentage</h3>
      <div className="relative w-full rounded shadow flex-grow">
        <div className="absolute z-0 right-0 bottom-0">
          <span className="
            text-6xl text-grey-900 font-bold leading-none
          ">%</span>
        </div>
        <div className="absolute z-0 left-0 bottom-0">
          <span className="
            text-6xl text-black leading-none
          ">{winPercentage.toFixed(0)}</span>
        </div>
        <div className={`
          absolute inset-0 h-full w-full z-0 bg-${bgColor}-900 opacity-75 rounded border border-${bgColor}-900
        `}></div>
      </div>
    </div>
  );
};

WinPercentageCard.propTypes = {
  played: PropTypes.number.isRequired,
  won: PropTypes.number.isRequired
};

export default WinPercentageCard
