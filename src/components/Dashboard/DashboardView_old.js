import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col
} from 'react-bootstrap';

import GamesPlayedCard from './GamesPlayedCard';
import LastMatchesList from './LastMatchesList';
import WinPercentageCard from './WinPercentageCard';
import WinPieChart from './WinPieChart';

const Dashboard = (props) => (
  <div className="Dashboard">
    <h3>Welcome {props.player.nickname}</h3>
    <Row>
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
        <Row>
          <Col xs={6} sm={6} md={12} lg={12} xl={12}>
            <GamesPlayedCard matches={props.matches} />
          </Col>
          <Col xs={6} sm={6} md={12} lg={12} xl={12}>
            <WinPercentageCard matches={props.matches} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <LastMatchesList matches={props.matches}
              games={props.games} />
          </Col>
        </Row>
      </Col>
      <Col xs={12} sm={12} md={8} lg={8} xl={8}>
        <WinPieChart matches={props.matches}
          games={props.games} />
      </Col>
    </Row>
  </div>
);

Dashboard.propTypes = {
  player: PropTypes.object.isRequired,
  games: PropTypes.array.isRequired,
  matches: PropTypes.array.isRequired
};

export default Dashboard
