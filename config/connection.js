var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'burger_db',
  port: '8889'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected as id: ' + connection.threadId);
});

module.exports = connection;

// // Pull in required dependencies
// var mysql = require('mysql');

// if(process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else{
//   connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'root',
// 	database : 'burgers_db',
// 	port     : '8889'
//   });
// };

// // Make the connection to MySQL
// connection.connect(function(err) {
//   if (err) {
//     console.error("ERROR: MySQL connection error -- " + err.stack);
//     return;
//   }
//   console.log("Connected to MySQL database as id " + connection.threadId);
// });

// // Export connection for ORM use
// module.exports = connection;
