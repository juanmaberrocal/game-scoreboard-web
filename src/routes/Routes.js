import React from "react";
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

import Login from "../components/Login";
import Signup from "../components/Signup";
import Home from "../components/Home";

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <PrivateRoute auth={props.authorizationStatus} path="/" component={Home} />
    </Switch>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({auth, ...rest}) => {
  const isAuth = ['Uninitialized', 'Unauthenticated'].indexOf(auth) === -1
  const route = isAuth ?
    <Route {...rest} /> :
    <Route render={({ location }) => (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: location }
        }}
      />
    )}
  />

  return (
    route
  );
}

const mapStateToProps = state => {
  return {
    authorizationStatus: state.authReducer.status
  };
};
export default connect(mapStateToProps)(Routes);
