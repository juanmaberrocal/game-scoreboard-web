import React from "react";
import PropTypes from "prop-types";
import {
  Card
} from 'react-bootstrap';

import noAvatar from '../../assets/no-avatar.png';

const PlayerCard = (props) => (
  <Card className="game-card">
    <Card.Img variant="top" src={noAvatar} />
    <Card.Body>
      <Card.Title>{props.nickname}</Card.Title>
    </Card.Body>
  </Card>
);

PlayerCard.propTypes = {
  id: PropTypes.number.isRequired,
  nickname: PropTypes.string.isRequired
};

export default PlayerCard
