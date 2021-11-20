import { Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Singup from "../pages/singup";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/singup">
        <Singup></Singup>
      </Route>
    </Switch>
  );
}
