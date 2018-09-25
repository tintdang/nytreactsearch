import React from "react";
import "./Card.css"

export const Card = props => 
<div className="card text-center">
    <div className="card-header">
        {props.name}
    </div>
    <div className="container">
        <div className="card-body">
            {props.children}
        </div>
    </div>
</div>;