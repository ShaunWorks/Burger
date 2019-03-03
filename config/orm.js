let connection = require("./connection.js")

let orm = {
    selectAll: function (table, cb) {
        connection.query("SELECT * FROM ??", [table], function (err, data) {
            if (err) throw err;
            cb(data);
            console.log(data);
        })
    },
    insertOne: function (table, cols, vals, cb) {
        connection.query("INSERT INTO ?? (??) VALUES (?)", [table, cols.toString(), vals.toString()], function (err, data) {
            if (err) throw err;
            cb(data);
        })
    },
    updateOne: function (table, col, val, id, cb) {
        connection.query("UPDATE ?? SET ?? = ? WHERE id = ?", [table, col, val, id], function (err,data) {
            if(err) throw err;
            cb(data);
        })
    }
}

module.exports = orm
