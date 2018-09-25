import React, { Component } from "react";
import { Card } from "../../components/Card"
import { Input, FormBtn } from "../../components/Form"
class Articles extends Component {
  state = {
    results: [],
    savedArticle: [],
    topic: "",
    startYear: "",
    endYear: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

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
            inputname={"Topic"}
            onChange={this.handleInputChange}
            name="title"
            placeholder="Topic Name"
          />
          <Input
            inputname={"Start Year"}
            onChange={this.handleInputChange}
            name="startYear"
            placeholder="Start Date"
          />
          <Input
            inputname={"End Year"}
            onChange={this.handleInputChange}
            name="endYear"
            placeholder="End Date"
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