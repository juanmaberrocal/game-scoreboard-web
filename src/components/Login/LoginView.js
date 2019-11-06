import React from "react";
import PropTypes from "prop-types";
import { Formik } from 'formik';
import {
  Button,
  Form,
  InputGroup
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LoginSchema from './LoginSchema';
import logo from '../../assets/logo.png';
import "./Login.css";

const Login = (props) => (
  <div className="Login d-flex flex-column align-items-center justify-content-center">
    <img src={logo} className="logo" alt="logo" />
    <Formik
      validationSchema={LoginSchema}
      initialValues={{
        email: props.email,
        password: props.password
      }}
      onSubmit={props.onSubmit}
    >
      {({
        isSubmitting,
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form className="login-form"
          onSubmit={handleSubmit}
          noValidate >
          <Form.Group controlId="email">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FontAwesomeIcon icon="envelope" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                required />
              <Form.Control.Feedback type="invalid">
                {errors.email}
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
                value={values.password}
                onChange={handleChange}
                required />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Button type="submit"
            variant="danger"
            disabled={isSubmitting} >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Login
