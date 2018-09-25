const router = require("express").Router();
const articleRoutes = require("./articles");

// Saved Article Routes
router.use("/saved", articleRoutes);

module.exports = router;