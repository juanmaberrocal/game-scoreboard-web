import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResultsTable from './ResultsTableView';

class ResultsTableContainer extends Component {
  render() {
    return (
      <ResultsTable
        value={this.props.value}
        players={this.props.players} />
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.playerReducer.players
  };
};

export default connect(mapStateToProps)(ResultsTableContainer);
