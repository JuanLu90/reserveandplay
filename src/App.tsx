import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.scss";

import Main from "./components/Main/Main";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
