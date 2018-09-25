const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// equals to api/article/
router.route("/")
  .get()
  .post();

// equals to api/article/:id

module.exports = router;