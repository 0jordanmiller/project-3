const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Talent.find(req)
      .sort({ date: -1 })
      .then(dbModel => {
        res.json(dbModel)
        console.log(dbModel);

      })
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Talent.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Talent.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Talent.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
