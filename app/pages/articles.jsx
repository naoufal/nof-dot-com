var React = require('react');
var Markdown = require('react-markdown');

var Layout = require('../components/layout.jsx');
var Card = require('../components/card.jsx');
var Hero = require('../components/hero.jsx');

class ArticlesPage extends React.Component {
  render() {
    var articles = this.props.articles.map(function(a) {
      var url = '/articles/' + a.slug;

      return (
        <a key={a.slug} href={url}>{a.title}</a>
      );
    });

    return (
      /*jshint ignore:start */
      <Layout
        title="Articles"
      >
        <Hero
          title="Articles"
          subtitle="Thoughts. Opinions. Code."
        />
        <div>
          {articles}
        </div>
      </Layout>
      /*jshint ignore:end */
    );
  }
}

module.exports = ArticlesPage;

