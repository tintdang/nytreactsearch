import React, { Component } from "react";
import { Card } from "../../components/Card";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
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

  handleSubmitButton = event => {
    event.preventDefault();
    console.log("Hello, you clicked me!")
    this.getArticles();
  }

  getArticles = () => {
    API.getArticles(this.state.topic, this.state.startYear, this.state.endYear)
      .then(results => {
        console.log(results);
        this.setState({ results: results.data.response.docs })
      })
      .catch(err => console.log(err));
  }

  saveArticle = event => {
    event.preventDefault();
    API.saveArticle({

    })
      .then(res => this.loadSavedArticles)
      .catch(err => console.log(err));

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
            onClick={this.handleSubmitButton}
          >
            Submit
          </FormBtn>
        </Card>

        <h1>Put in my Result box here</h1>
        <Card
          name={"Results"}
        >
          {/* print out all my results here */}
          <List>
            {this.state.results.map(article => (
              <ListItem key={article._id}>
                <div>
                  {article.headline.main}<span><button>Save</button></span>
                  <p> Link: {article.web_url} </p>
                  <p> Date: {article.pub_date} </p>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
        <h1>Put in my Saved Article box here</h1>
        <Card
          name={"Saved Articles"}
        >
          {/* Print all my saved articles here */}
          <List>
            {this.state.savedArticle.map(article => (
              <ListItem key={article._id}>
                {article.title}
              </ListItem>
            ))}
          </List>

        </Card>
      </div>
    )
  }
}

export default Articles;