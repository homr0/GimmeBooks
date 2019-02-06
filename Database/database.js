var mysql = require("mysql");

var connection = mysql.createPool({
  connectionLimit: 200,
  host: "localhost",
  user: "root",
  password: "root",
  database: "meenal",
  host: 3306,
  debug: false,
  multipleStatements: true
});

module.exports.connection = connection;
