import React, { Component } from "react";
import { connect } from 'react-redux';

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
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
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

export default connect(null, null)(LoginContainer);
