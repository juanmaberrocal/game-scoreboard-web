// React
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import LastMatchesList from './LastMatchesListView';

class LastMatchesListContainer extends Component {
  render() {
    const latestMatches = this.props.matches.slice(0, 5);

    return (
      <LastMatchesList
        games={this.props.games}
        matches={latestMatches} />
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.gameReducer.games
  };
};

export default connect(mapStateToProps)(LastMatchesListContainer);
