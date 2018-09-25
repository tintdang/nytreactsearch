import React from "react";

export const FormBtn = props =>
  // ...props takes in any attributes given in the Formbtn Header Tag 
  <button {...props} style={{ marginLeft: "Auto", marginRight: "Auto", display: "inherit" }} className="btn">
    {/* while props.children will take in any input in between the FormBtn tags */}
    {props.children}

  </button>