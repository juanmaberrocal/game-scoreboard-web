import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authActions } from '../../redux/actions'
import Home from "./HomeView";

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout = () => {
    this.props.logout()
      .then((didLogout) => {
        if (didLogout) {
          this.props.history.push('/login');
        }
      });
  }

  render() {
    return (
      <Home
        onLogout={this.onLogout} />
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    logout: () => (dispatch(authActions.logout()))
  }
);

export default connect(null, mapDispatchToProps)(HomeContainer);
