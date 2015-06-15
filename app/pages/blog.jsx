var React = require('react');
var Markdown = require('react-markdown');

var Layout = require('../components/layout.jsx');
var Card = require('../components/card.jsx');
var Hero = require('../components/hero.jsx');

class BlogPage extends React.Component {
  render() {
    return (
      /*jshint ignore:start */
      <Layout
        title={this.props.article.title}
      >
        <Hero
          title={this.props.article.title}
          subtitle={this.props.article.date}
        />
        <Card>
          <Markdown
            className="md"
            source={this.props.article.__content}
          />
        </Card>
      </Layout>
      /*jshint ignore:end */
    );
  }
}

module.exports = BlogPage;

