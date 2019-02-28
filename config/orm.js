let connection = require("./connection.js")

let orm = {
    selectAll: function () {
        connection.query("SELECT * FROM burgers", function (err, data) {
            if (err) throw err;
            console.log(data);
        })
    },
    insertOne: function (creator, name) {
        connection.query("INSERT INTO burgers (creator, eater, burger_name, devoured) VALUES (?, null, ?, false)", [creator, name], function (err, data) {
            if (err) throw err;
            console.log("Burger added");
        })
    }
}

module.exports = orm
// connection.end();