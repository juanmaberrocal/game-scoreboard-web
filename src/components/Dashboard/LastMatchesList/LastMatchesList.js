import React from "react";
import PropTypes from "prop-types";

const LastMatchListItem = (props) => {
  const gameData = props.games.find((game) => (game.id == props.match.game_id));
  const gameName = gameData ? gameData.name : "";

  return (
    <div className="flex flex-col flex-no-wrap relative justify-center w-4 items-center pb-4">
      <figure className="relative">
        <div className="relative h-8 w-8 rounded-full bg-white border border-gray-900 text-center flex justify-center items-center z-10">
          <span>{gameName[0]}</span>
        </div>
        {
          props.match.winner ? (
            <div className="absolute z-0 bottom-0 h-12 w-4 border bg-green-400 rounded-full border-gray-900 ml-2"></div>
          ) : (
            <div className="absolute z-0 top-0 h-12 w-4 border bg-red-400 rounded-full border-gray-900 ml-2"></div>
          )
        }
      </figure>
      <div className="absolute bottom-0 text-sm">
        {props.match.played_on}
      </div>
    </div>
  )
}

const LastMatchesList = (props) => {
  const latestMatches = props.matches.slice(0, 5);

  return (
    <div className="LastMatchesList
      flex flex-col items-stretch
      w-full h-32
    ">
      <h3 className="w-full flex-grow-0 text-sm font-medium">Last Matches</h3>
      <div className="w-full border bg-white rounded shadow flex flex-grow items-center justify-center relative">
        <div className="h-full w-full z-10 flex flex-row flex-no-wrap justify-around">
          {latestMatches.map((match, key) =>
            <LastMatchListItem key={match.id}
              match={match}
              games={props.games} />
          )}
        </div>
        <hr className="absolute w-full border-gray-700 border-t-8 shadow z-0 -mt-2" />
      </div>
    </div>
  );
};

LastMatchesList.propTypes = {
  matches: PropTypes.array.isRequired,
  games: PropTypes.array.isRequired
};

export default LastMatchesList;
