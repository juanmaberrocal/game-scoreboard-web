import React, { Component } from "react";
import { connect } from 'react-redux';

import Games from './GamesView'

class GamesContainer extends Component {
  render () {
    if (this.props.loading) return (<div>LOADING</div>);
    
    return (
      <Games
        games={this.props.games} />
    );
  }
}

const mapStateToProps = state => {
  return Object.assign({}, state.gameReducer);
};

export default connect(mapStateToProps)(GamesContainer);
