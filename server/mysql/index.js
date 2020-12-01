const mysql = require("mysql");

var client = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user",
});

function sqlFn(sql, arr, callback) {
  console.log(sql, arr);
  client.query(sql, arr, function (error, result) {
    if (error) {
      console.log(new Error(error));
      return;
    }
    callback(result);
  });
}

module.exports = sqlFn;
