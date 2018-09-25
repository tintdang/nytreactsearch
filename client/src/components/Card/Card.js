import React from "react";
import "./Card.css"

export const Card = props => 
<div className="card">
    <div className="card-header">
        {props.name}
    </div>
    <div className="container">
        <div className="card-body">
            <h1>{props.inputName}</h1>
            {props.children}
        </div>
    </div>
</div>;