// React
import React, { Component } from "react";
import { connect } from 'react-redux';

// Components
import Signup from './SignupView'

// Redux
import {
  authActions,
  gameActions,
  playerActions,
  modalActions
} from '../../redux/actions'

class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      nickname: "",
      first_name: "",
      last_name: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);

    this.props.signup(
      values.email,
      values.password,
      values.password_confirmation,
      values.nickname,
      values.first_name,
      values.last_name
    ).then(async (response) => {
      if (response.success) {
        // load game and player data
        await this.props.fetchGames(response.player);
        await this.props.fetchPlayers();

        // navigate to dashboard
        this.props.history.push('/');
      } else {
        this.props.openAlert({
          type: 'error',
          header: 'Sign Up Error',
          body: 'Please verify your new user information!'
        });

        setSubmitting(false);
      }
    });
  }

  render () {
    return (
      <Signup
        email={this.state.email}
        password={this.state.password}
        password_confirmation={this.state.password_confirmation}
        nickname={this.state.nickname}
        first_name={this.state.first_name}
        last_name={this.state.last_name}
        onSubmit={this.onSubmit} />
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    signup: (email, password, password_confirmation, nickname, first_name, last_name) =>
      (dispatch(authActions.signup(email, password, password_confirmation, nickname, first_name, last_name))),
    fetchGames: (player) => (dispatch(gameActions.fetch(player))),
    fetchPlayers: () => (dispatch(playerActions.fetch())),
    openAlert: (props) => (dispatch(modalActions.open(props))),
  }
);

export default connect(null, mapDispatchToProps)(SignupContainer);
