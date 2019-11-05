import React from "react";
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Games from "./containers/Games";
import Players from "./containers/Players";
import NotFound from "./containers/NotFound";

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
      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}
