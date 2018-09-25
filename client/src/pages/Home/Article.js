import React, { Component } from "react";
import SearchBar from "../../components/SearchBar"
class Articles extends Component {


  render() {
    return(
      <div>
        <h1>Put in my Search box here</h1>
        <SearchBar />
        <h1>Put in my Result box here</h1>
        <h1>Put in my Saved Article box here</h1>
      </div>
    )
  }
}

export default Articles;