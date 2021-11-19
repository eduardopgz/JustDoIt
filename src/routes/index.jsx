import { Route, Switch } from "react-router";
import Home from "../pages/home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
