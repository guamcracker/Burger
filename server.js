// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
// Sets up the Express App
// =============================================================
var app = express();
app.use(express.static(__dirname + '/public'));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(methodOverride('_method'));
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
);
app.set('view engine', 'handlebars');

var routes = require('./controllers/routes.js');
app.use('/', routes);

var port = 3000;
app.listen(port);

// var port = process.env.PORT || 3000;

// var app = express();
// // Starts listening on localhost:8889 or the enviromental port.
// app.listen(port, function() {
//     console.log('Listening on port: ' + port);
// });

// Requiring our models for syncing
//var db = require("./models")

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
//app.use(bodyParser.json())

// Static directory
//app.use(express.static("./public"))

// Routes
// =============================================================
//require("./routes/html-routes.js")(app)
//require("./routes/api-routes.js")(app)

// Syncing our sequelize models and then starting our Express app
// =============================================================
//db.sequelize.sync({ force: true }).then(function() {
//app.listen(PORT, function() {
//console.log("App listening on PORT " + PORT)
//})
//})
