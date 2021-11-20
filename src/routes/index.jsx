import { Route, Switch } from "react-router-dom";
import Home from "../pages/home";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
