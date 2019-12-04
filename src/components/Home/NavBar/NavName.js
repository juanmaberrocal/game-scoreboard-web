import React from "react";
import PropTypes from "prop-types";

import noAvatar from '../../../assets/no-avatar-player.png';

const NavName = (props) => {
  const avatarSource = props.player.avatar_url ? props.player.avatar_url : noAvatar;

  return (
    <div className="
      flex flex-row items-center
      w-3/5 md:w-full h-16
      py-3
      bg-gray-900
    ">
      <div className="w-1/4 md:w-1/3">
        <img className="h-8 w-8 rounded-full mx-auto" src={avatarSource} alt="avatar" />
      </div>
      <div className="w-3/4 overflow-hidden truncate text-left">
        {props.player.nickname}
      </div>
    </div>
  );
};

NavName.propTypes = {
  player: PropTypes.object
};

export default NavName;
