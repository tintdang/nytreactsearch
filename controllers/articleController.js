const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: (req, res) => {
    db.Article
      .find(req.query)
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  }
}