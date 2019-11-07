import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import GameCard from "./GameCard"

const Games = (props) => (
  <div className="Games">
    <h3>Games</h3>
    {props.isFetching ? (
      <FontAwesomeIcon icon="spinner" size="6x" spin />
    ) : (
      <Row>
        {props.games.map((game, key) =>
          <Col key={game.id} xs={12} sm={6} md={4} lg={4} xl={3}>
            <GameCard
              id={game.id}
              name={game.name} />
          </Col>
        )}
      </Row>
    )}
  </div>
);

Games.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  games: PropTypes.array.isRequired
};

export default Games
