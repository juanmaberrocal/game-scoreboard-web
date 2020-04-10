// React
import React, { Component } from "react";
import { connect } from 'react-redux';

// Components
import Players from './PlayersView'

class PlayersContainer extends Component {
  render () {
    if (this.props.loading) return (<div>LOADING</div>);

    return (
      <Players
        players={this.props.players} />
    );
  }
}

const mapStateToProps = state => {
  return Object.assign({}, state.playerReducer);
};

export default connect(mapStateToProps)(PlayersContainer);
