var React = require('react');

class Header extends React.Component {
  render() {
    return (
      /*jshint ignore:start */
      <header className="header">
        <h1 className="header__logo">
          Naoufal Kadhom
        </h1>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="/blog">Blog</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/about">About</a>
            </li>
          </ul>
        </nav>
      </header>
      /*jshint ignore:end */
    );
  }
}

module.exports = Header;
