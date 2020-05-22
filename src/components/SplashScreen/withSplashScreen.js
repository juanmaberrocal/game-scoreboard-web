// React
import { connect } from 'react-redux';

// Components
import SplashScreen from './SplashScreenContainer'

// Redux
import {
  authActions,
  gameActions,
  playerActions
} from '../../redux/actions'

/*
 withSplashScreen is a wrapper component that is called
 as a function with the component to be "wrapped"
 NOTE: it is intended to wrap the `App.js` component as a landing page
 for the application to pull together all the necessary data
 */
function withSplashScreen(WrappedComponent) {
  return connect(null, mapDispatchToProps)(SplashScreen(WrappedComponent));
}

const mapDispatchToProps = (dispatch) => (
  {
    renew: () => (dispatch(authActions.renew())),
    fetchGames: (player) => (dispatch(gameActions.fetch(player))),
    fetchPlayers: () => (dispatch(playerActions.fetch()))
  }
);

export default withSplashScreen;
