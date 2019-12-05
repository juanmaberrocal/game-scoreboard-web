import React from "react";
import PropTypes from "prop-types";

import PlayerStatistics from '../PlayerStatistics';
import noAvatar from '../../assets/no-avatar-player.png';
import './Player.css';

const Player = (props) => {
  const player = props.player;
  const avatarSource = player.avatar_url ? player.avatar_url : noAvatar;

  return (
    <div className="Player
      flex flex-row flex-wrap
      h-full w-full
      p-3 md:px-16 md:py-8
    ">
      <div className="
        w-full md:w-2/5
      ">
        <div className="PlayerCard
          mt-12 pt-12
          bg-white
          shadow rounded
          relative
        ">
          <div className="w-full absolute AvatarContainer">
            <img className="h-24 w-24 rounded-full mx-auto" src={avatarSource} alt="avatar" />
          </div>
          <div className="
            w-full
            p-3
          ">
            <div className="text-center">
              <h1 className="text-lg font-medium">{player.nickname}</h1>
            </div>
            <hr className="mt-2 pb-2" />
            <div className="leading-snug">
              <div><span className="text-sm">Name: {player.first_name} {player.last_name}</span></div>
              <div><span className="text-sm">Email: {props.player.email}</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="
        w-full md:w-3/5
        p-3 md:pl-6 md:pr-0 md:py-0
      ">
        <PlayerStatistics
          player={props.player}
          layout="rows" />
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};

export default Player
