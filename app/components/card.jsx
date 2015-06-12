var React = require('react');

class Card extends React.Component {
  render() {
    return (
      /*jshint ignore:start */
      <div className="card">
        <div className="card__top">
          <div className="card__shadow" />
          <div className="card__inner-shadow" />
        </div>
        <div className="card__content">
          {this.props.children}
        </div>
      </div>
      /*jshint ignore:end */
    );
  }
}

module.exports = Card;
