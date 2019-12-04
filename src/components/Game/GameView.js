import React from "react";
import PropTypes from "prop-types";

import GameStatistics from '../GameStatistics';
import noAvatar from '../../assets/no-avatar-game.png';

const Game = (props) => {
  const game = props.game;
  const avatarSource = game.avatar_url ? game.avatar_url : noAvatar;

  return (
    <div className="Game
      flex flex-row flex-wrap
      h-full w-full
      p-3 md:px-16 md:py-8
    ">
      <div className="
        w-full md:w-2/5
      ">
        <div className="GameCard
          bg-white
          shadow rounded
        ">
          <div className="w-full AvatarContainer">
            <img className="h-32 w-full" src={avatarSource} alt="avatar" />
          </div>
          <div className="
            w-full
            p-3
          ">
            <div className="text-center">
              <h1 className="font-medium">{game.name}</h1>
            </div>
            <div>
            </div>
            <hr />
            <div>
              <span className="text-sm">{game.description}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="
        w-full md:w-3/5
        p-3 md:pl-6 md:pr-0 md:py-0
      ">
        <GameStatistics
          game={props.game}
          layout="rows" />
      </div>
    </div>
  );
};

Game.propTypes = {
  game: PropTypes.object.isRequired
};

export default Game
