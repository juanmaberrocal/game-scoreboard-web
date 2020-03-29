// React
import React, { Component } from "react";
import { connect } from 'react-redux';

// Components
import Dashboard from "./DashboardView";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pendingMatches: [],
      confirmedMatches: [],
    };
  }

  async componentDidMount() {
    this.props.player.matches().then((response) => {
      if (response.success) {
        const matches = response.matches;
        const pendingMatches = matches.filter(match => match.match_players.first().isPending());
        const confirmedMatches = matches.filter(match => match.isConfirmed());

        this.setState({
          pendingMatches: pendingMatches,
          confirmedMatches: confirmedMatches
        });
      }
    });
  }

  render() {
    return (
      <Dashboard
        player={this.props.player}
        pendingMatches={this.state.pendingMatches}
        confirmedMatches={this.state.confirmedMatches} />
    );
  }
}

const mapStateToProps = state => {
  return {
    player: state.authReducer.player
  };
};

export default connect(mapStateToProps)(DashboardContainer);
