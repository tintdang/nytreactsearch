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

  componentDidMount() {
    this.loadSavedArticles()
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

  saveArticle = id => {
    const selectedArticle = this.state.results.find(article => article._id === id)
    console.log(selectedArticle)
    const savedArticle = {
      title: selectedArticle.headline.main,
      url: selectedArticle.web_url,
      date: selectedArticle.pub_date
    }
    API.saveArticle(savedArticle)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  }

  loadSavedArticles = () => {
    API.getSavedArticles()
      .then(data => {
        console.log(data)
        this.setState({
          savedArticle: data.data
        })
      })
  }

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(data => {
        this.loadSavedArticles()
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
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

        <Card
          name={"Results"}
        >
          {/* print out all my results here */}
          <List>
            {this.state.results.map(article => (
              <ListItem key={article._id}>
                <div>
                  {article.headline.main}<span><button onClick={() => this.saveArticle(article._id)}>Save</button></span>
                  <p> Link: {article.web_url} </p>
                  <p> Date: {article.pub_date} </p>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>

        <Card
          name={"Saved Articles"}
        >
          {/* Print all my saved articles here */}
          <List>
            {this.state.savedArticle.map(article => (
              <ListItem key={article._id}>
                {article.title} <span><button onClick={() => this.deleteArticle(article._id)}>Delete</button></span>
              </ListItem>
            ))}
          </List>

        </Card>
      </div>
    )
  }
}

export default Articles;