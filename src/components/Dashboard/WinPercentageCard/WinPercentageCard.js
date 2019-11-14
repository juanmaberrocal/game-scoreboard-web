import React from "react";
import PropTypes from "prop-types";

const WinPercentageCard = (props) => {
  const matchesWon = props.matches.filter((match) => (match.winner)).length;
  const matchesPlayed = props.matches.length;
  const winPercentage = ((matchesWon/matchesPlayed) * 100).toFixed(2);

  return (
    <div className="WinPercentageCard
      flex flex-col
      w-1/2 md:w-1/5
      h-1/2
      pb-3
    ">
      <h3 className="w-full flex-grow-0 text-sm font-medium">Win Percentage</h3>
      <div className="w-full border bg-white rounded shadow flex-grow">
        {winPercentage}%
      </div>
    </div>
  );
};

WinPercentageCard.propTypes = {
  matches: PropTypes.array.isRequired
};

export default WinPercentageCard
