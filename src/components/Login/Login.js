import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  Button,
  Form,
  InputGroup
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../../assets/logo.png';
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render () {
    return (
      <div className="Login d-flex flex-column align-items-center justify-content-center">
        <img src={logo} className="logo" alt="logo" />
        <Form className="login-form">
          <Form.Group controlId="email">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FontAwesomeIcon icon="envelope" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="email"
                placeholder="Email"
                value={this.state.email}
                required />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="password">
             <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FontAwesomeIcon icon="lock" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="password"
                placeholder="Password"
                value={this.state.password}
                required />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Button variant="danger" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, null)(Login);
