import React, {Component} from 'react';
import logo from '../logo.png';
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

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        // await auth0Client.loadSession();
        // setTimeout(() => {
        //   this.setState({
        //     loading: false,
        //   });
        // }, 1500)
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;
