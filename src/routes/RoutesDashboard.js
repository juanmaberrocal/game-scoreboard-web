import React from "react";
import {
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Games from "../components/Games";
import Players from "../components/Players";
import Player from "../components/Player";
import NotFound from "../components/NotFound";

export default function Routes() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={path} exact component={Dashboard} />
      <Route path={`${path}games`} component={Games} />

      <Route path={`${path}players/:playerId`} component={Player} />
      <Route path={`${path}players`} component={Players} />
      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}
