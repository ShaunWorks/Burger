let orm = require("../config/orm.js")

let burger = {
    getBurgers: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },
    addBurger: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    eatBurger: function (id, cb) {
        orm.updateOne("burgers", "devoured", true, id, function (res) {
            cb(res);
        })
    }
}

module.exports = burger