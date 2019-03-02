// var keys = require("../keys.js");
var mysql = require('mysql');
var connection;
if(process.env.JAWSDB_URL)
  connection = mysql.createConnection(process.env.JAWSDB_URL);
else {
  connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.SQL_PASS,
    database: 'burgers_db'
  })
}


connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
module.exports = connection;