import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import Layout from "./components/Layout/Layout";
import "../src/scss/main.scss"

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Layout} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
