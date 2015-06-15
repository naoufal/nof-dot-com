var fs = require('fs');
var React = require('react');
var yamlFront = require('yaml-front-matter');
var Promise = require('bluebird');

var Blog = require('./app/pages/blog.jsx');
var Articles = require('./app/pages/articles.jsx');

var readFile = Promise.promisify(fs.readFile);
var readDir = Promise.promisify(fs.readdir);

module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.redirect('/article/2015-06-14-example');
  });

  app.get('/articles', function(req, res, next) {
    getArticles()
      .map(function(filename) {
        return readFile(__dirname + '/posts/' + filename, {encoding: 'utf8'})
          .then(function(markdown) {
            var article = yamlFront.loadFront(markdown);
            article.slug = filename.replace('.md', '');

            return article;
          });
      })
      .then(function(articles) {
        var articles_page = React.createElement(
          Articles,
          {articles: articles}
        );

        // Render page
        res.send(React.renderToStaticMarkup(articles_page));
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  // Blog post
  app.get('/articles/:slug', function(req, res, next) {
    var slug = req.params.slug;

    getArticle(slug)
      .then(function(article) {
        var blog = React.createElement(
          Blog,
          {article: article}
        );

        // Render page
        res.send(React.renderToStaticMarkup(blog));
      })
      .catch(function(err) {
        // Article does not exist
        res.send('404');
      });
  });

  // 404
  app.get('*', function(req, res, next) {
    res.send('404');
    res.end();
  });
};

function getArticles() {
  return readDir(__dirname + '/posts');
}

function getArticle(slug) {
  return readFile(__dirname + '/posts/' + slug + '.md', {encoding: 'utf8'})
    .then(function(markdown) {
      return yamlFront.loadFront(markdown);
    });
}
