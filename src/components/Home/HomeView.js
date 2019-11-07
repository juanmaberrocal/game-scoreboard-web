import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Routes from "../../routes/RoutesDashboard";
// import "./Home.css";

const Home = (props) => (
  <div className="Home">
    <Navbar fluid collapseOnSelect bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">Game Scoreboard</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {/* "NavLink" here since "active" class styling is needed */}
          <Nav.Link as={NavLink} to="/games">Games</Nav.Link>
          <Nav.Link as={NavLink} to="/players">Players</Nav.Link>
          <NavDropdown alignRight={true} title={
            <FontAwesomeIcon icon="user" />
          }>
            <NavDropdown.Item as={NavLink} to="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={props.onLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="container-fluid">
      <Routes />
    </div>
  </div>
);

Home.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default Home;
