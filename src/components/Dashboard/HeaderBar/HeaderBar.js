import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import IconPlusCircle from '../../Icons/IconPlusCircle';
import noAvatar from '../../../assets/no-avatar-player.png';

const HeaderBar = (props) => {
  const avatarSource = props.player.avatar ? props.player.avatar : noAvatar;

  return (
    <header className="HeaderBar
      flex flex-col md:flex-row items-start md:items-center justify-between
      h-auto md:h-32 w-full
      py-2 px-3 md:px-16 md:py-2
      bg-white
      shadow
    ">
      <div className="
        flex flex-row flex-no-wrap items-center
        w-full md:w-4/5
      ">
        <img className="h-16 rounded-full hidden md:block mr-6" src={avatarSource} alt="avatar" />
        <div className="flex flex-col">
          <h1 className="text-lg">Welcome, {props.player.first_name} {props.player.last_name}</h1>
          <div className="text-xs">
            Role: <span className="capitalize">{props.player.role}</span>
          </div>
        </div>
      </div>
      <div className="
        flex flex-row md:flex-row-reverse flex-no-wrap
        mt-4 md:mt-0
      ">
        <NavLink className="flex flex-col items-center text-center" to="/matches/new">
          <IconPlusCircle className="h-8 w-8 fill-current" viewBox="0 0 24 24" />
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
