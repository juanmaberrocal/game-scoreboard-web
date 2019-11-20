import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import noAvatar from '../../assets/no-avatar-player.png';

const Players = (props) => (
  <div className="Players
    h-full w-full
    p-3 md:px-16 md:py-8">
    <h1>Players</h1>
    <div className="
      flex flex-row flex-wrap
    ">
      {props.players.map((player, key) =>
        <NavLink className="
          w-full md:w-1/5
        " key={key} to={`players/${player.id}`}>
          <div className="
            flex flex-row flex-no-wrap
            mb-3 mr-3 p-3
            bg-white border rounded shadow
          ">
            <div className="w-1/4 md:w-1/3">
              <img className="h-8 rounded-full mx-auto" src={player.avatar_url ? player.avatar_url : noAvatar} alt="avatar" />
            </div>
            <div className="w-3/4 overflow-hidden truncate text-left">
              {player.nickname}
            </div>
          </div>
        </NavLink>
      )}
    </div>
  </div>
);

Players.propTypes = {
  players: PropTypes.array.isRequired
};

export default Players
