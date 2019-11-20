import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import Chart from "react-apexcharts";

const buildPieData = (breakdown) => {
  let pieData = {};
  Object.entries(breakdown).forEach(([gameId, gameBreakdown]) => {
    pieData[gameId] = gameBreakdown.won;
  });
  return pieData;
}

const buildPieLabels = (pieData, gamesData) => {
  return Object.keys(pieData).map((gameId) => {
    const gameData = gamesData.find((game) => (game.id === parseInt(gameId, 10)));
    return gameData ? gameData.name : ''; // since games are loaded thru redux might not be ready
  });
}

const WinPieChart = (props) => {
  const pieData = buildPieData(props.breakdown);
  const pieLabels = buildPieLabels(pieData, props.games);
  const pieSeries = Object.values(pieData);
  const options= {
    labels: pieLabels,
    legend: {
      position: "bottom"
    }
  };
  const series = pieSeries;

  return (
    <div className="WinPieChart
      flex flex-col
      w-full md:w-4/5
      h-64 md:h-full
      pl-0 md:pl-3 pb-3 mt-3 md:mt-0
    ">
      <h3 className="w-full flex-grow-0 text-sm font-medium">Win Breakdown</h3>
      <div className="w-full border bg-white rounded shadow flex-grow">
        <Chart className="absolute inset-0 flex items-center"
          type="pie"
          height='100%'
          options={options}
          series={series} />
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    games: state.gameReducer.games
  };
};

WinPieChart.propTypes = {
  breakdown: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(WinPieChart);
