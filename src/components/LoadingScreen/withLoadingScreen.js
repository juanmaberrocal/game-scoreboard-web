import LoadingScreen from './LoadingScreenContainer'

/*
 withLoadingScreen is a wrapper component that is called
 as a function with the component to be "wrapped"
 */
function withLoadingScreen(WrappedComponent, loadingFunction) {
  return LoadingScreen(WrappedComponent, loadingFunction);
}

export default withLoadingScreen;
