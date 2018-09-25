import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"

const App = () =>
  <Router>
    <div>
      <Navbar />

    </div>
  </Router>;


export default App;
