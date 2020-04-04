// React
import React from 'react';
import PropTypes from 'prop-types';

const PercentileCard = (props) => {
  const bgColor = props.percentile >= 90 ? 'green' : props.percentile >= 75 ? 'yellow' : 'red';

  return (
    <div className="
      flex-grow
      h-16 md:h-32
      p-3
      mb-3 md:mb-0 md:mr-3
      relative
      rounded shadow
    ">
      <div className="absolute z-0 right-0 bottom-0">
        <span className="
          text-6xl text-grey-900 font-bold leading-none
        ">{props.percentile}</span>
      </div>
      <div className="absolute z-0 left-0 bottom-0">
        <span className="
          text-6xl text-black leading-none
        ">{props.percentileWins}</span>
      </div>
      <div className={`
        absolute inset-0 h-full w-full z-0 bg-${bgColor}-900 opacity-75 rounded border border-${bgColor}-900
      `}></div>
    </div>
  );
}

const PercentileCards = (props) => {
  const percentiles = props.percentiles;
  const descPercentiles = Object.keys(percentiles).sort((a, b) => (b - a));

  return (
    <div className="PercentileCards
      flex flex-col items-stretch
      w-full
    ">
      <h3 className="w-full flex-grow-0 text-sm font-medium">Percentiles</h3>
      <div className="
        flex flex-col md:flex-row flex-no-wrap items-stretch
      ">
        {descPercentiles.map((percentile, key) =>
          <PercentileCard key={key}
            percentile={percentile}
            percentileWins={percentiles[percentile]} />
        )}
      </div>
    </div>
  );
};

PercentileCards.propTypes = {
  percentiles: PropTypes.object.isRequired
};

export default PercentileCards;
