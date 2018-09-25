const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");

// API Routes
router.use("/api", apiRoutes);


router.use("/article", function (req, res) {
  console.log(req.body)
  const test = req.body
  const q = test.searchTerm.replace(/ /g, "+");
  let url = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${q}`;
  url += `&sort=newest`
  if (test.startDate) url += `&start_date=${test.startDate}0101`;
  if (test.endDate) url += `&end_date=${test.endDate}0101`;
  url += `&api-key=${process.env.NYT_API}`
  console.log(url)
  axios.get(url).then(response => {
    res.json(response.data)})
})
// If no API routes are hit, send them to the React App
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;