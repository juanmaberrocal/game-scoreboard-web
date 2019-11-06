import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap';

import Routes from "../../routes/RoutesDashboard";
// import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <Navbar fluid collapseOnSelect bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">Game Scoreboard</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* "NavLink" here since "active" class styling is needed */}
            <Nav.Link as={NavLink} to="/games">Games</Nav.Link>
            <Nav.Link as={NavLink} to="/players">Players</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container-fluid">
        <Routes />
      </div>
    </div>
  );
}
