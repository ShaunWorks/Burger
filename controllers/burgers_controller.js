let express = require("express");

let router = express.Router();

router.get("/", function(req,res) {
    res.render("index", {})
})

router.post("/", function(req,res) {

})

router.put("/", function(req,res) {

})

router.delete("/", function(req,res) {

})

module.exports = router;