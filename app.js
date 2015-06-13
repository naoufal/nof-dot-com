var express = require('express');
var app = express();

var PORT = process.env.PORT || 8888;
console.log('port: ', PORT);
console.log('envs: ', process.env);
// // Gzip all the things
app.use(require('compression')());

// Serve static files
app.use(express.static('public'));

// Enable JSX and ES6
require('node-jsx').install({harmony: true});

// App routes
require('./routes.js')(app);

// Start App
app.listen(PORT, function() {
  console.log('App started on port ' + PORT);
});

module.exports = app;
