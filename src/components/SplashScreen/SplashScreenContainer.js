// React
import React, { Component } from 'react';

// Components
import SplashScreen from './SplashScreenView'

// Services
import API from '../../services/Api';

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

    /*
     API load is required to wake up the backend server
     Will ping the server 5 times before throwing an error
     After ensuring that the API is awake it has to check
     if a user was previously logged in.
     If the user was logged in load the remaining necessary
     data
     */
    _loadApi() {
      API.get("ping")
        .then(response => {
          // API is awake
          this.props.renew()
            .then(async (response) => {
              // user was previously logged in
              if (response.success) {
                // load game and player data
                await this.props.fetchGames(response.player);
                await this.props.fetchPlayers();
              }

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
