var React = require('react');

var Header = require('./header.jsx');
var Hero = require('./hero.jsx');
var Footer = require('./footer.jsx');

class Layout extends React.Component {
  _buildTitle() {
    if (this.props.title) {
      return this.props.title + ' | Naoufal Kadhom';
    }

    return 'Naoufal Kadhom';
  }

  render() {
    return (
      /*jshint ignore:start */
      <html>
        <head>
          <title>{this._buildTitle()}</title>
          <meta name='viewport' content='width=device-width
            initial-scale=1.0
            maximum-scale=1.0'
          />
          <link rel="stylesheet" href="/css/style.css" />
          <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.6/highlight.min.js" />
          <script>hljs.initHighlightingOnLoad();</script>
        </head>
        <body>
          <div className="content">
            <Header />
            {this.props.children}
            <Footer />
          </div>
        </body>
      </html>
      /*jshint ignore:end */
    );
  }
}

Layout.propTypes = {
  title: React.PropTypes.string
};

module.exports = Layout;
