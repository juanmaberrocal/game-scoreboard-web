import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PlayerCard from "./PlayerCard"

const Players = (props) => (
  <div className="Players">
    <h3>Players</h3>
    {props.isFetching ? (
      <FontAwesomeIcon icon="spinner" size="6x" spin />
    ) : (
      <Row>
        {props.players.map((player, key) =>
          <Col key={player.id} xs={12} sm={6} md={4} lg={4} xl={3}>
            <PlayerCard
              id={player.id}
              nickname={player.nickname} />
          </Col>
        )}
      </Row>
    )}
  </div>
);

Players.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  players: PropTypes.array.isRequired
};

export default Players
