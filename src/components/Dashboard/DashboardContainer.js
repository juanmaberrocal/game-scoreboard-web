import React, { Component } from "react";
import { connect } from 'react-redux';

import Dashboard from "./DashboardView";
import Match from '../../services/Match';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: [],
    };
  }

  async componentDidMount() {
    Match.fetch({
      player_id: this.props.player.id
    }).then((response) => {
      if (response.success) {
        this.setState({matches: response.matches});
      }
    });
  }

  render() {
    return (
      <Dashboard
        player={this.props.player}
        matches={this.state.matches} />
    );
  }
}

const mapStateToProps = state => {
  return {
    player: state.authReducer.player
  };
};

export default connect(mapStateToProps)(DashboardContainer);
