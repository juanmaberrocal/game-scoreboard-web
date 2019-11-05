import React from "react";
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./containers/Login";
import Home from "./containers/Home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/" component={Home} />
    </Switch>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({...rest}) {
  const route = true ?
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
