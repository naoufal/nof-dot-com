var express = require('express');
var app = express();

console.log(process.env)
var PORT = process.env.PORT || 8888;

// // Gzip all the things
app.use(require('compression')());

// Serve static files
app.use(express.static('assets'));

// Enable JSX and ES6
require('node-jsx').install({harmony: true});

// App routes
require('./routes.js')(app);

// Start App
app.listen(PORT, function() {
  console.log('App started on port ' + PORT);
});

module.exports = app;
