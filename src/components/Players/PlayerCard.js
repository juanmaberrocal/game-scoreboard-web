import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import noAvatar from '../../assets/no-avatar-player.png';

const PlayerCard = (props) => {
  const avatarSource = props.player.avatar_url ? props.player.avatar_url : noAvatar;

  return (
    <NavLink className="
      w-full md:w-1/5
    " to={`players/${props.player.id}`}>
      <div className="
        flex flex-row flex-no-wrap items-center
        mb-3 mr-3 p-3
        bg-white border rounded shadow
      ">
        <div className="w-1/4 md:w-1/3">
          <img className="h-8 w-8 rounded-full mx-auto" src={avatarSource} alt="avatar" />
        </div>
        <div className="w-3/4 overflow-hidden truncate text-left">
          {props.player.nickname}
        </div>
      </div>
    </NavLink>
  );
}

PlayerCard.propTypes = {
  player: PropTypes.object.isRequired
};

export default PlayerCard
