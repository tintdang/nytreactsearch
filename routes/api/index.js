const router = require("express").Router();
const articleRoutes = require("./articles");

// Saved Article Routes, grabs the export from the articles.js file.
router.use("/saved", articleRoutes);

module.exports = router;