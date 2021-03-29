import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { LoginContainer } from "./pages/login.container";
import { RegisterContainer } from "./pages/register.container";
import { Area } from "./pages/area";

export const App = () => {
  document.body.style.backgroundColor = "#f2f2f2";
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={LoginContainer} />
          <Route path="/Register" component={RegisterContainer} />
          <Route path="/Area" component={Area} />
        </Switch>
      </HashRouter>
    </>
  );
};
