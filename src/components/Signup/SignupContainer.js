import React, { Component } from "react";
import { connect } from 'react-redux';

import {
  authActions,
  gameActions,
  playerActions,
  modalActions
} from '../../redux/actions'
import Signup from './SignupView'

class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      nickname: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: ""
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
            header: 'Login Error',
            body: 'Please verify your username and password!'
          });

          setSubmitting(false);
        }
      });
  }

  render () {
    return (
      <Signup
        email={this.state.email}
        nickname={this.state.nickname}
        password={this.state.password}
        password_confirmation={this.state.password_confirmation}
        first_name={this.state.first_name}
        last_name={this.state.last_name}
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

export default connect(null, mapDispatchToProps)(SignupContainer);
