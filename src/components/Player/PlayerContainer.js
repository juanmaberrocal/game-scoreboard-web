// React
import React, { Component } from "react";

// Models && Collections
import PlayerModel from '../../models/Player';

// Components
import Player from './PlayerView';
import withLoadingScreen from '../LoadingScreen';

const fetchPlayer = async (context) => {
  const playerId = context.props.match.params.playerId
  const player = new PlayerModel(playerId);
  await player.fetch();
  return player;
}

class PlayerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: props.data
    };
  }

  render() {
    return (
      <Player player={this.state.player} />
    );
  }
}

export default withLoadingScreen(PlayerContainer, fetchPlayer);
