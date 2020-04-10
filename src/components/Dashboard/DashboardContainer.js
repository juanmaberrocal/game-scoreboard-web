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

    this.fetchPlayerMatches = this.fetchPlayerMatches.bind(this);
  }

  async componentDidMount() {
    this.fetchPlayerMatches();
  }

  fetchPlayerMatches() {
    const player = this.props.player;

    player.matches().then((response) => {
      if (response.success) {
        const matches = response.matches;
        const confirmedMatches = matches.confirmed();
        const pendingMatches = matches.filter(match => match.playerResult(player.id).isPending());

        this.setState({
          confirmedMatches: confirmedMatches,
          pendingMatches: pendingMatches,
        });
      }
    });
  }

  render() {
    return (
      <Dashboard
        player={this.props.player}
        confirmedMatches={this.state.confirmedMatches}
        pendingMatches={this.state.pendingMatches}
        doRefresh={this.fetchPlayerMatches} />
    );
  }
}

const mapStateToProps = state => {
  return {
    player: state.authReducer.player
  };
};

export default connect(mapStateToProps)(DashboardContainer);
