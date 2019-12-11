import React from "react";
import PropTypes from "prop-types";

import Breadcrumb from '../Breadcrumb';
import GameStatistics from '../GameStatistics';
import IconUser from '../Icons/IconUser';
import IconClock from '../Icons/IconClock';
import noAvatar from '../../assets/no-avatar-game.png';

const Game = (props) => {
  const game = props.game;
  const avatarSource = game.avatar_url ? game.avatar_url : noAvatar;
  const crumbs = [
    ['Home', '/'],
    ['Games', '/games'],
    [game.name, `/games/${game.id}`]
  ];

  return (
    <div className="
      flex flex-col
      p-3 md:px-16 md:py-8
    ">
      <Breadcrumb crumbs={crumbs} />
      <div className="Game
        flex flex-row flex-wrap
        h-full w-full
      ">
        <div className="
          w-full md:w-2/5
        ">
          <div className="GameCard
            bg-white
            shadow rounded
          ">
            <div className="w-full AvatarContainer">
              <img className="h-40 w-full" src={avatarSource} alt="avatar" />
            </div>
            <div className="
              w-full
              p-3
            ">
              <div className="text-center">
                <h1 className="text-lg font-medium">{game.name}</h1>
              </div>
              <div className="flex flex-row flex-no-wrap justify-around">
                <div className="flex flex-col flex-no-wrap items-center p-2">
                  <IconUser className="mx-auto fill-current" />
                  <span className="text-sm">{game.min_players} - {game.max_players}</span>
                </div>
                <div className="flex flex-col flex-no-wrap items-center p-2">
                  <IconClock className="mx-auto fill-current" />
                  <span className="text-sm">{game.min_play_time} - {game.max_play_time}</span>
                </div>
              </div>
              <hr className="pb-2" />
              <div className="leading-snug">
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
    </div>
  );
};

Game.propTypes = {
  game: PropTypes.object.isRequired
};

export default Game
