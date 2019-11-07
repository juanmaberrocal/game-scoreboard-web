import React from "react";
import PropTypes from "prop-types";
import {
  Card
} from 'react-bootstrap';

const GamesPlayedCard = (props) => {
  const matchesPlayed = props.matches.length;

  return (
    <Card className="games-played-card">
      <Card.Body>
        <Card.Title>{matchesPlayed}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Games Played</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

GamesPlayedCard.propTypes = {
  matches: PropTypes.array.isRequired
};

export default GamesPlayedCard
