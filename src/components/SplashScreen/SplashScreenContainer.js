import React, { Component } from 'react';

import API from '../../services/Api';
import SplashScreen from './SplashScreenView'

function SplashScreenContainer(WrappedComponent) {
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
      if (this.state.loading) return SplashScreen();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default SplashScreenContainer;
