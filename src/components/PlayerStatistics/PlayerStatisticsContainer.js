import React, { Component } from "react";
import PropTypes from "prop-types";

import PlayerStatistics from './PlayerStatisticsView';

class PlayerStatisticsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      statistics: {}
    };
  }

  async componentDidMount() {
    this.props.player.statistics().then((response) => {
      this.setState({
        loading: false,
        statistics: response.statistics
      });
    });
  }

  render() {
    if (this.state.loading) return (<div>LOADING</div>);
    
    return (
      <PlayerStatistics
        layout={this.props.layout}
        statistics={this.state.statistics} />
    );
  }
}

PlayerStatisticsContainer.propTypes = {
  player: PropTypes.object.isRequired
};

export default PlayerStatisticsContainer;
