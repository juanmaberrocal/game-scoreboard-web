import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import IconPlusCircle from '../../Icons/IconPlusCircle';
import noAvatar from '../../../assets/no-avatar-player.png';

const HeaderBar = (props) => {
  const avatarSource = props.player.avatar ? props.player.avatar : noAvatar;

  return (
    <header className="flex flex-row items-center justify-between
      h-32 w-full
      px-16 py-2
      bg-white
      shadow
    ">
      <div className="HeaderBar
        flex flex-row flex-no-wrap items-center
        w-4/5
      ">
        <img className="h-16" src={avatarSource} alt="avatar" />
        <div className="flex flex-col ml-6">
          <h1 className="text-lg">Welcome, {props.player.first_name} {props.player.last_name}</h1>
          <div className="text-xs">
            Role: {props.player.role}
          </div>
        </div>
      </div>
      <div className="
        flex flex-row-reverse flex-no-wrap
      ">
        <NavLink className="flex flex-col items-center" to="/matches/new">
          <IconPlusCircle className="fill-current" />
          <div className="text-xs">Add Result</div>
        </NavLink>
      </div>
    </header>
  );
};

HeaderBar.propTypes = {
  player: PropTypes.object.isRequired
};

export default HeaderBar;
