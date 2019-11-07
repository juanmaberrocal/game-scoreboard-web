import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GamesPlayedCard from './GamesPlayedCard';
import WinPercentageCard from './WinPercentageCard';

const Dashboard = (props) => (
  <div className="Dashboard">
    <h3>Welcome {props.player.nickname}</h3>
    <Row>
      <Col>
        <GamesPlayedCard matches={props.matches} />
      </Col>
      <Col>
        <WinPercentageCard matches={props.matches} />
      </Col>
    </Row>
  </div>
);

Dashboard.propTypes = {
  player: PropTypes.object.isRequired,
  matches: PropTypes.array.isRequired
};

export default Dashboard
