import React, { Component } from "react";
import { connect } from 'react-redux';

import {
  authActions,
  gameActions,
  playerActions,
  modalActions
} from '../../redux/actions'
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
          // load game and player data
          this.props.fetchGames();
          this.props.fetchPlayers();

          // navigate to dashboard
          this.props.history.push('/');
        } else {
          this.props.openAlert({
            type: 'error',
            header: 'Log In Error',
            body: 'Please verify your username and password!'
          });

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
    login: (email, password) => (dispatch(authActions.login(email, password))),
    fetchGames: () => (dispatch(gameActions.fetch())),
    fetchPlayers: () => (dispatch(playerActions.fetch())),
    openAlert: (props) => (dispatch(modalActions.open(props))),
  }
);

export default connect(null, mapDispatchToProps)(LoginContainer);
