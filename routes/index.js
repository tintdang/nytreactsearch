const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("./api", apiRoutes);

// If no API routes are hit, send them to the React App
router.use( (req, res) => 
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);