import React, { Component } from 'react';

import LoadingScreen from './LoadingScreenView'

function LoadingScreenContainer(WrappedComponent, loadingFunction) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      const data = await loadingFunction(this);
      this.setState({
        loading: false,
        data: data
      });
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingScreen();

      // otherwise, show the desired route
      return <WrappedComponent
        data={this.state.data}
        {...this.props} />;
    }
  };
}

export default LoadingScreenContainer;
