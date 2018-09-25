import React, { Component } from "react";
import { Card } from "../../components/Card"
import { Input } from "../../components/Form"
class Articles extends Component {


  render() {
    return (
      <div>
        <h1>Put in my Search box here</h1>
        <Card 
        name={"Search"}
        inputName={"Topic"}
        >
          <Input />
        </Card>


        <h1>Put in my Result box here</h1>
        <h1>Put in my Saved Article box here</h1>
      </div>
    )
  }
}

export default Articles;