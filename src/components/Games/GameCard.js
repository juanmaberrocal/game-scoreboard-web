import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import noAvatar from '../../assets/no-avatar-game.png';

const GameCard = (props) => {
  const avatarSource = props.game.avatar_url ? props.game.avatar_url : noAvatar;

  return (
    <NavLink className="
      w-full md:w-1/5
    " to={`games/${props.game.id}`}>
      <div className="
        flex flex-col flex-no-wrap items-center
        mb-3 mr-3
        bg-white border rounded shadow
      ">
        <div className="w-full h-24">
          <img className="w-full h-full" src={avatarSource} alt="avatar" />
        </div>
        <div className="w-3/4 p-3 overflow-hidden truncate text-center">
          {props.game.name}
        </div>
      </div>
    </NavLink>
  );
};

GameCard.propTypes = {
  game: PropTypes.object.isRequired
};

export default GameCard
