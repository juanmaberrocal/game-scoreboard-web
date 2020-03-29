// React
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import PendingMatchesList from './PendingMatchesListView';

class PendingMatchesListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.matches.length === 0) { return null; }

    return (
      <PendingMatchesList
        games={this.props.games}
        matches={this.props.matches} />
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.gameReducer.games
  };
};

export default connect(mapStateToProps)(PendingMatchesListContainer);
