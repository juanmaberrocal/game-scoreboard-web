import React, {Component} from 'react';
import { connect } from 'react-redux';

import API from '../../services/Api';
import { authActions } from '../../redux/actions'

import logo from '../../assets/logo.png';
import './splash-screen.css';


function LoadingMessage() {
  return (
    <div className="splash-screen d-flex flex-column align-items-center justify-content-center">
      <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
        <img src={logo} className="logo" alt="logo" />
        <div className="title">Game Scoreboard</div>
      </div>
      <div className="footer mt-auto">Developed by Saludzinho™</div>
    </div>
  );
}

function SplashScreen(WrappedComponent) {
  return class extends Component {
    _retryDuration = 3000;
    _retryLimit = 5;

    constructor(props) {
      super(props);
      this._retryCount = 0;
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      this._loadApi();
    }

    _loadApi() {
      API.get("ping")
        .then(response => {
          this.props.renew()
            .then(() => {
              this.setState({loading: false});
            });
        })
        .catch(error => {
          if (this._retryCount < this._retryLimit) {
            this._retryCount++;

            setTimeout(() => {
              this._loadApi()
            }, this._retryDuration);
          } else {
            throw Error('API Failed to Respond');
          }
        });
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

const mapDispatchToProps = (dispatch) => (
  {
    renew: () => (dispatch(authActions.renew()))
  }
);

function withSplashScreen(WrappedComponent) {
  return connect(null, mapDispatchToProps)(SplashScreen(WrappedComponent));
}

export default withSplashScreen;
