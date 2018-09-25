const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// equals to api/saved/
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// equals to api/saved/:id
router
  .route("/:id")
  .delete(articleController.remove);

module.exports = router;