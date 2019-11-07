import React, { Component } from "react";
import { connect } from 'react-redux';

import { authActions } from '../../redux/actions'
import Login from './LoginView'

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);

    this.props.login(values.email, values.password)
      .then((didLogin) => {
        if (didLogin) {
          this.props.history.push('/');
        } else {
          setSubmitting(false);
        }
      });
  }

  render () {
    return (
      <Login
        email={this.state.email}
        password={this.state.password}
        onSubmit={this.onSubmit} />
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    login: (email, password) => (dispatch(authActions.login(email, password)))
  }
);

export default connect(null, mapDispatchToProps)(LoginContainer);
