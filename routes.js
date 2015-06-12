var fs = require('fs');
var React = require('react');
var Blog = require('./app/pages/blog.jsx');

module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.redirect('/blog');
  });

  app.get('/blog', function(req, res, next) {
    // Get post
    var post = fs.readFileSync(__dirname + '/posts/example.md', {
      encoding: 'utf8'
    });

    var blog = React.createElement(
      Blog,
      {post: post}
    );

    // Render page
    res.send(React.renderToStaticMarkup(blog));
  });

  // Blog post
  app.get('/:year/:topic/:post', function(req, res, next) {
    res.write('blog post');
    res.end();
  });

  // 404
  app.get('*', function(req, res, next) {
    res.send('fo');
    res.end();
  });
};
