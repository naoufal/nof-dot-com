var React = require('react');

class Hero extends React.Component {
  render() {
    var title;
    if (this.props.title) {
      title = (
        <h2 className="hero__title">
          {this.props.title}
        </h2>
      );
    }

    var subtitle;
    if (this.props.subtitle) {
      subtitle = (
        <h3 className="hero__subtitle">
          {this.props.subtitle}
        </h3>
      );
    }

    return (
      /*jshint ignore:start */
      <div className="hero">
        <div className="hero__content">
          {title}
          {subtitle}
        </div>
      </div>
      /*jshint ignore:end */
    );
  }
}

module.exports = Hero;
