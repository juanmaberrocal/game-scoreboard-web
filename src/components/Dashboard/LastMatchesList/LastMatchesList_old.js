import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  ListGroup
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LastMatchListItem = (props) => {
  const gameData = props.games.find((game) => (game.id == props.match.game_id));
  const gameName = gameData ? gameData.name : "";

  return (
    <ListGroup.Item>
      {props.match.winner ? (
        <FontAwesomeIcon icon="star" />
      ) : ('')}
      {gameName}
    </ListGroup.Item>
  )
}

const LastMatchesList = (props) => {
  const latestMatches = props.matches.slice(0, 5);

  return (
    <Card className="latest-matches-list">
      <Card.Header>Latest Matches</Card.Header>
      <ListGroup variant="flush">
        {latestMatches.map((match, key) =>
          <LastMatchListItem key={match.id}
            match={match}
            games={props.games} />
        )}
      </ListGroup>
    </Card>
  );
};

LastMatchesList.propTypes = {
  matches: PropTypes.array.isRequired,
  games: PropTypes.array.isRequired
};

export default LastMatchesList;
