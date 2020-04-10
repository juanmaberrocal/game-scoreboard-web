// React
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Models && Collections
import Match from '../../../models/Match';

// Components
import PendingMatchesList from './PendingMatchesListView';

// Redux
import { modalActions } from '../../../redux/actions'

// Utils
import { timestampToDate } from '../../../utils/DateTime';

class PendingMatchesListContainer extends Component {
  constructor(props) {
    super(props);

    this.onReject = this.onReject.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(game, pendingMatch, pendingMatchPlayer) {
    const match = new Match(pendingMatch.id);
    const loadingModalProps = {
      className: 'PendingMatchModal',
      header: `${game.name} Match`,
      body: '<LOADING>'
    };

    match.fetch().then(() => {
      const readyModalProps = Object.assign({}, loadingModalProps, {
        body: () => (
          <div className="text-left">
            <div>
              <span className="font-bold">Played On: </span>
              {timestampToDate(match.played_on)}
            </div>
            <div>
              <div>
                <span className="font-bold">Results:</span>
                <ol className="list-inside list-disc">
                  {match.match_players.all().map(matchPlayer => {
                    const player = this.props.players.findById(matchPlayer.playerId());
                    const playerName = player ? player.nickname : 'Unknown'

                    return (
                      <li key={matchPlayer.id}>
                        {playerName}
                        {matchPlayer.winner ? ' - Winner' : null}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        ),
        actions: [
          () => (<button key="reject" className="
            py-1 px-12
            mb-3 md:mb-0
            border rounded-full
            bg-red-500 border-red-500
            hover:bg-red-700 hover:border-red-700
            text-gray-200
          " onClick={() => this.onReject(pendingMatchPlayer)}>Reject</button>),
          () => (<button key="confirm" className="
            py-1 px-12
            mb-3 md:mb-0
            border rounded-full
            bg-green-500 border-green-500
            hover:bg-green-700 hover:border-green-700
            text-gray-200
          " onClick={() => this.onConfirm(pendingMatchPlayer)}>Confirm</button>),
        ],
      });

      this.props.openPendingMatchModal(readyModalProps);
    });

    this.props.openPendingMatchModal(loadingModalProps);
  }

  onConfirm(pendingMatchPlayer) {
    pendingMatchPlayer.confirm().then((response) => {
      this.props.doRefresh();
    });

    this.props.closePendingMatchModal();
  }

  onReject(pendingMatchPlayer) {
    pendingMatchPlayer.reject().then((response) => {
      this.props.doRefresh();
    });

    this.props.closePendingMatchModal();
  }

  render() {
    if (this.props.matches.length === 0) { return null; }

    return (
      <PendingMatchesList
        games={this.props.games}
        matches={this.props.matches}
        onClick={this.onClick} />
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.gameReducer.games,
    player: state.authReducer.player,
    players: state.playerReducer.players,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    openPendingMatchModal: (props) => (dispatch(modalActions.open(props))),
    closePendingMatchModal: () => (dispatch(modalActions.close())),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PendingMatchesListContainer);
