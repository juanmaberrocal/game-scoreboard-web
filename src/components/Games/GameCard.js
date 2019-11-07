import React from "react";
import PropTypes from "prop-types";
import {
  Card
} from 'react-bootstrap';

import noAvatar from '../../assets/no-avatar.png';

const GameCard = (props) => (
  <Card className="game-card">
    <Card.Img variant="top" src={noAvatar} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
    </Card.Body>
  </Card>
);

GameCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default GameCard
