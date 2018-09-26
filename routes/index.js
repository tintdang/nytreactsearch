const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");

// API Routes

//The route goes to /api downward to the api folder to allow the folder api routes to use /api
router.use("/api", apiRoutes);

// When the route hits /article
router.use("/article", function (req, res) {
  console.log(req.body)
  const test = req.body

  
  const q = test.searchTerm.replace(/ /g, "+");
  let url = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${q}`;
  url += `&sort=newest`
  //Checks if there are inputs there. if yes, add it on to the url
  if (test.startDate) url += `&start_date=${test.startDate}0101`;
  if (test.endDate) url += `&end_date=${test.endDate}0101`;
  url += `&api-key=${process.env.NYT_API}`
  console.log(url)

  //use axios to grab the json data and send it back to the front end
  axios.get(url).then(response => {
    res.json(response.data)})
})
// If no API routes are hit, send them to the React App
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;