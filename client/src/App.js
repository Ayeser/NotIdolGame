import React from "react";
import Landing from "./pages/Landing";
import Able from "./pages/Able";
import Ark from "./pages/Ark";
import Eden from "./pages/Eden";
import Heaven from "./pages/Heaven";
import Joseph from "./pages/Joseph";
import Moses from "./pages/Moses";
import Paul from "./pages/Paul";
import NoMatch from "./pages/NoMatch";
// import { BrowserRouter } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route exact path={"/"}>
        <Landing />
        </Route>
        <Route exact path={"/Able"}>
        <Able />
        </Route>
        <Route exact path={"/Ark"}>
        <Ark />
        </Route>
        <Route exact path={"/Eden"}>
        <Eden />
        </Route>
        <Route exact path={"/Heaven"}>
        <Heaven />
        </Route>
        <Route exact path={"/Joseph"}>
        <Joseph />
        </Route>
        <Route exact path={"/Moses"}>
        <Moses />
        </Route>
        <Route exact path={"/Paul"}>
        <Paul />
        </Route>
        <Route>
        <NoMatch />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
