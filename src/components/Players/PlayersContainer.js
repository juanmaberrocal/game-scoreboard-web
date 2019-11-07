import React, { Component } from "react";
import { connect } from 'react-redux';

import Players from './PlayersView'

class PlayersContainer extends Component {
  render () {
    return (
      <Players
        isFetching={this.props.isFetching}
        players={this.props.players} />
    );
  }
}

const mapStateToProps = state => {
  return Object.assign({}, state.playerReducer);
};

export default connect(mapStateToProps)(PlayersContainer);
