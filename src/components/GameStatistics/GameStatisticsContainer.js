import React, { Component } from "react";
import PropTypes from "prop-types";

import GameStatistics from './GameStatisticsView';

class GameStatisticsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      statistics: {}
    };
  }

  async componentDidMount() {
    this.props.game.statistics().then((response) => {
      this.setState({
        loading: false,
        statistics: response.statistics
      });
    });
  }

  render() {
    if (this.state.loading) return (<div>LOADING</div>);
    
    return (
      <GameStatistics
        layout={this.props.layout}
        statistics={this.state.statistics} />
    );
  }
}

GameStatisticsContainer.propTypes = {
  game: PropTypes.object.isRequired
};

export default GameStatisticsContainer;
