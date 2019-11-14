import React from "react";
import PropTypes from "prop-types";

const WinPercentageCard = (props) => {
  const matchesWon = props.matches.filter((match) => (match.winner)).length;
  const matchesPlayed = props.matches.length;
  const winPercentage = ((matchesWon/matchesPlayed) * 100);

  const bgColor = winPercentage > 30 ? 'green' : winPercentage > 20 ? 'yellow' : 'red';

  return (
    <div className="WinPercentageCard
      flex flex-col
      w-1/2 md:w-1/5
      h-32 md:h-1/2
      pl-1 md:px-0 md:pb-3
    ">
      <h3 className="w-full flex-grow-0 text-sm font-medium">Win Percentage</h3>
      <div className="relative w-full rounded shadow flex-grow">
        <div className="absolute z-0 left-0 bottom-0">
          <span className="text-6xl text-grey-900 font-bold">{winPercentage.toFixed(0)}</span>
        </div>
        <div className="absolute z-0 right-0 bottom-0">
          <span className="text-6xl text-black">%</span>
        </div>
        <div className={`absolute inset-0 h-full w-full z-0 bg-${bgColor}-900 opacity-75 rounded border border-${bgColor}-900`}></div>
      </div>
    </div>
  );
};

WinPercentageCard.propTypes = {
  matches: PropTypes.array.isRequired
};

export default WinPercentageCard
