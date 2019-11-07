import React from "react";
import PropTypes from "prop-types";
import {
  Card
} from 'react-bootstrap';

const WinPercentageCard = (props) => {
  const matchesWon = props.matches.filter((match) => (match.winner)).length;
  const matchesPlayed = props.matches.length;
  const winPercentage = (matchesWon/matchesPlayed) * 100;

  return (
    <Card className="win-percentage-card">
      <Card.Body>
        <Card.Title>{winPercentage}%</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Games Won</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

WinPercentageCard.propTypes = {
  matches: PropTypes.array.isRequired
};

export default WinPercentageCard;
