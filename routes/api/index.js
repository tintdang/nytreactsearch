const router = require("express").Router();
const articleRoutes = require("./articles");

// Article Routes
router.use("/article", articleRoutes);

module.exports = router