import React, { Component } from "react";
import { Card } from "../../components/Card"
import { Input, FormBtn } from "../../components/Form"
class Articles extends Component {

  sayHello = event => {
    console.log("Hello, you clicked me!")
  }

  render() {
    return (
      <div>
        <h1>Put in my Search box here</h1>
        <Card
          name={"Search"}
        >
          <Input
            inputName={"Topic"}
          />
          <Input
            inputName={"Start Year"}
          />
          <Input
            inputName={"End Year"}
          />
          <FormBtn
            onClick={this.sayHello}
          >
            Submit
          </FormBtn>
        </Card>

        <h1>Put in my Result box here</h1>
        <Card
          name={"Results"}
        >
          {/* print out all my results here */}
        </Card>
        <h1>Put in my Saved Article box here</h1>
        <Card
          name={"Saved Articles"}
        >

        </Card>
      </div>
    )
  }
}

export default Articles;