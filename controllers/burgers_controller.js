let express = require("express");
let burger = require("../models/burgers.js")

let router = express.Router();

router.get("/", function(req,res) {
    burger.getBurgers(function(data) {
        var hbsObject = {
            burgers: data
          };
          res.render('index', hbsObject);
    })
})

router.get("/api/burgers", function(req,res) {
    burger.getBurgers(function(data) {
          res.json(data);
    })
})

router.post("/api/burgers", function(req, res) {
    burger.addBurger([
      'burger_name'
    ], [
      req.body.burger_name
    ], function(data) {
      res.redirect('/');
    });
  });

router.put("/api/burgers/:id", function(req,res) {
    burger.eatBurger(req.params.id, function(data) {
        res.redirect('/');
    })
})

module.exports = router;