import axios from "axios";

export default {
  getArticles: (searchTerm, startDate, endDate) => {
    const q = searchTerm.replace(/ /g, "+");
    let url = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${q}`;
    url += `&sort=newest`
    if (startDate) url += `&startDate=${startDate}`;
    if (endDate) url += `&endDate=${endDate}`;
    url += `&api-key=254e96d813da4da3b00c09ba7b3ecd08`
    console.log(url)
    return axios.get(url)
  },
  getSavedArticles: () => {
    return axios.get("/api/saved")
  },
  saveArticle: (savedArticle) => {
    return axios.post("/api/saved", savedArticle);
  },
  deleteArticle: (id) => {
    return axios.delete("api/saved/" + id)
  }
};

// http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=254e96d813da4da3b00c09ba7b3ecd08