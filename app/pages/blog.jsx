var React = require('react');
var Markdown = require('react-markdown');

var Layout = require('../components/layout.jsx');
var Card = require('../components/card.jsx');

class BlogPage extends React.Component {
  render() {
    return (
      /*jshint ignore:start */
      <Layout
        title="Blog"
      >
        <Card>
          <Markdown
            className="md"
            source={this.props.post}
          />
        </Card>
      </Layout>
      /*jshint ignore:end */
    );
  }
}

module.exports = BlogPage;

