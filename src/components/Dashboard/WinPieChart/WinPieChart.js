import React from "react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";

const buildPieData = (matches) => {
  let pieData = {};
  matches.forEach((match) => {
    if (!pieData.hasOwnProperty(match.game_id)) {
      pieData[match.game_id] = 0;
    }

    pieData[match.game_id]++;
  });
  return pieData;
}

const buildPieLabels = (pieData, gamesData) => {
  return Object.keys(pieData).map((gameId) => {
    const gameData = gamesData.find((game) => (game.id === gameId));
    return gameData ? gameData.name : ''; // since games are loaded thru redux might not be ready
  });
}

const WinPieChart = (props) => {
  const matchesWon = props.matches.filter((match) => (match.winner));
  const pieData = buildPieData(matchesWon);
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
      w-full md:w-3/5
      h-64 md:h-full
      pb-3 mt-3 md:mt-0
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

WinPieChart.propTypes = {
  games: PropTypes.array.isRequired,
  matches: PropTypes.array.isRequired
};

export default WinPieChart
