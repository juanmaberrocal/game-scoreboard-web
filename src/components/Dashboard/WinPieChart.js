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

const WinPercentageCard = (props) => {
  const matchesWon = props.matches.filter((match) => (match.winner));
  const pieData = buildPieData(matchesWon);
  const pieLabels = buildPieLabels(pieData, props.games);
  const pieSeries = Object.values(pieData);
  const options= {
    chart: {
      id: "basic-bar"
    },
    labels: pieLabels
  };
  const series = pieSeries;

  return (
    <Chart type="pie"
      options={options}
      series={series} />
  );
};

WinPercentageCard.propTypes = {
  games: PropTypes.array.isRequired,
  matches: PropTypes.array.isRequired
};

export default WinPercentageCard;
