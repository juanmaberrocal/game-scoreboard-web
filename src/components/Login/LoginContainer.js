// React
import React, { Component } from "react";
import { connect } from 'react-redux';

// Components
import Login from './LoginView'

// Redux
import {
  authActions,
  gameActions,
  playerActions,
  modalActions
} from '../../redux/actions'

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

    this.props.login(
      values.email,
      values.password
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
    fetchGames: (player) => (dispatch(gameActions.fetch(player))),
    fetchPlayers: () => (dispatch(playerActions.fetch())),
    openAlert: (props) => (dispatch(modalActions.open(props))),
  }
);

export default connect(null, mapDispatchToProps)(LoginContainer);
