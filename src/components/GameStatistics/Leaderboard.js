import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

const LeaderboardRow = (props) => {
  const playerData = props.players.find((player) => (player.id === parseInt(props.row.player_id, 10)));
  const playerName = playerData ? playerData.nickname : ''; // since players are loaded thru redux might not be ready
  const borderColor = props.index % 2 === 0 ? 'bg-white' : 'bg-gray-200';

  return (
    <tr className={`${borderColor} text-center`}>
      <td>{props.index + 1}</td>
      <td>{playerName}</td>
      <td>
        {props.row.won}
        <span className="text-xs color-gray-200 ml-3">
          ({((props.row.won / props.row.played) * 100).toFixed(0)}%)
        </span>
      </td>
    </tr>
  );
};

const Leaderboard = (props) => (
  <div className="Leaderboard
    flex flex-col items-stretch
    w-full
    mb-6
  ">
    <h3 className="w-full flex-grow-0 text-sm font-medium">Leaderboard</h3>
    <div className="w-full border bg-white rounded shadow max-h-64 overflow-y-auto">
      <table className="
        table-auto border-collapse
        w-full
      ">
        <thead>
          <tr className="border-b border-gray-400">
            <th>Rank</th>
            <th>Player</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody>
          {props.leaderboard.map((row, index) =>
            <LeaderboardRow key={index}
              index={index}
              row={row}
              players={props.players} />
          )}
        </tbody>
      </table>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    players: state.playerReducer.players
  };
};

Leaderboard.propTypes = {
  leaderboard: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Leaderboard);
