import React from "react";

// Will take in whatever comes in from parent and puts it inside where it calls {children}
const Jumbotron = ({ children }) =>
  <div style={{ height: 300, clear: 'both' }} className="Jumbotron">
    {children}
  </div>

export default Jumbotron;