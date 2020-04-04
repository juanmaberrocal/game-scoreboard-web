import React, { Component } from 'react';
import { connect } from 'react-redux';

import { modalActions } from '../../redux/actions'
import MatchAdd from './MatchAddView';
import Match from '../../models/Match';

class MatchAddContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game_id: 0,
      results: [{player_id: 0, winner: false}]
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);

    let results = {};
    const gameId = parseInt(values.game_id, 10);
    values.results.forEach(result => results[result.player_id] = result.winner);

    Match.create(gameId, results).then((response) => {
      if (response.success) {
        // navigate to dashboard
        this.props.history.push('/');
      } else {
        this.props.openAlert({
          type: 'error',
          header: 'Match Result Error',
          body: 'Please verify your match results and try again!'
        });

        setSubmitting(false);
      }
    });
  }

  render() {
    return (
      <MatchAdd
        game_id={this.state.game_id}
        results={this.state.results}
        games={this.props.games}
        onSubmit={this.onSubmit} />
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.gameReducer.games
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    openAlert: (props) => (dispatch(modalActions.open(props)))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MatchAddContainer);
