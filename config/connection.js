// Pull in required dependencies
var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'burger_db',
    port: '8889'
  });
}

// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'root',
//   database: 'burger_db',
//   port: '8889'
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log('connected as id: ' + connection.threadId);
// });

// module.exports = connection;
