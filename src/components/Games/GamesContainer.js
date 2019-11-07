import React, { Component } from "react";
import { connect } from 'react-redux';

import Games from './GamesView'

class GamesContainer extends Component {
  render () {
    return (
      <Games
        isFetching={this.props.isFetching}
        games={this.props.games} />
    );
  }
}

const mapStateToProps = state => {
  return Object.assign({}, state.gameReducer);
};

export default connect(mapStateToProps)(GamesContainer);
