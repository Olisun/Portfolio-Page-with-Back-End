var db = require('../models');

module.exports = function(app) {

  app.get("/api/contacts", function(req, res) {

    db.ContactMe.findAll({}).then(function(dbContactMe) {
      res.json(dbContactMe);
    });

  });

  app.post("/api/contacts", function(req, res) {

    console.log("api/contacts route hit successfully")
    console.log(req)
    console.log(res)
    db.ContactMe.create(req.body).then(function(dbContactMe) {
      res.json(dbContactMe);
    });

  });

  app.get("/api/:name/:message", function(req, res) {

    db.ContactMe.findOne({
      where: {
        name: req.params.name,
        messaage: req.params.messaage
      }
    }).then(function(dbContactMe) {
      res.json(dbContactMe);
    });

  });

}