import React, { Component } from 'react';
import HeaderBlock from './headerblock';

class Header extends Component {
  render() {
    const { organization } = this.props;
    return (
      <header>
        <a className="ah1a" href="/glav/index.html">{organization}</a>
        <div className="burger-menu" id="burgerMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <HeaderBlock />
      </header>
    );
  }
}

export default Header;