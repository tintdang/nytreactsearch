import React from "react";

export const Input = props =>
  <div className="form-group">
    <label>{props.inputName}</label>
    <input className="form-control" {...props} />
  </div>