import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Homepage from "./pages/Home"
import Navbar from "./components/Navbar"

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>

    </div>
  </Router>;


export default App;
