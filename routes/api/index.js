const router = require("express").Router();
const articleRoutes = require("./articles");

// Article Routes
router.use("/articles", articleRoutes);

module.exports = router