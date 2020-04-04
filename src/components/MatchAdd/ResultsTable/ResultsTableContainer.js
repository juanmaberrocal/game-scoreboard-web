// React
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import ResultsTable from './ResultsTableView';

class ResultsTableContainer extends Component {
  render() {
    const errors = (
      this.props.errors === undefined || typeof this.props.errors === 'string'
    ) ? [] : this.props.errors;

    return (
      <ResultsTable
        value={this.props.value}
        players={this.props.players}
        errors={errors} />
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.playerReducer.players
  };
};

export default connect(mapStateToProps)(ResultsTableContainer);
