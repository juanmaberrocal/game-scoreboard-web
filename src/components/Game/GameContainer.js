import React, { Component } from "react";

import GameModel from '../../services/Game';
import Game from './GameView';
import withLoadingScreen from '../LoadingScreen';

const fetchGame = async (context) => {
  const gameId = context.props.match.params.gameId
  const game = new GameModel(gameId);
  await game.fetch();
  return game;
}

class GameContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: props.data
    };
  }

  render() {
    return (
      <Game game={this.state.game} />
    );
  }
}

export default withLoadingScreen(GameContainer, fetchGame);
