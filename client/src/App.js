import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Home";
import Navbar from "./components/Navbar";
import NoMatch from "./pages/NoMatch";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* This will load this if anybody tries to access another route that is not indicated on the app */}
        <Route component={NoMatch} />
      </Switch>

    </div>
  </Router>;


export default App;
