import React from "react";
import {
  Route,
  Switch,
  Redirect,
  useRouteMatch
} from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Games from "./containers/Games";
import Players from "./containers/Players";

export default function Routes() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={path} exact component={Dashboard} />
      <Route path={`${path}games`} component={Games} />
      <Route path={`${path}players`} component={Players} />
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
