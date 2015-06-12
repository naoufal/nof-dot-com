var React = require('react');

class Hero extends React.Component {
  render() {
    return (
      /*jshint ignore:start */
      <div className="hero">
        <h2 className="hero__title">
          JS Styles with React.js
        </h2>

        <h3 className="hero__subtitle">
          I know what you’re thinking, but really, it’s cool!
        </h3>
      </div>
      /*jshint ignore:end */
    );
  }
}

module.exports = Hero;
