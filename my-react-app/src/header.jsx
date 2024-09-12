import React, { Component } from 'react';

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
        <div className="header-block1" id="headerBlock">
          <nav className="header-nav">
            <a href="#place" id="home">HOME</a>
            <a href="#gheter" id="about">ABOUT US</a>
            <a href="#themenu" id="menus">MENU</a>
            <a href="#honest" id="drinkmenu">DRINKS MENU</a>
            <a href="#diners" id="contact">CONTACTS</a>
            <a href="#neigh" id="vauncher">GIFT VOUCHERS</a>
            <a href="#bookin" id="reserv">RESERVATION</a>
            <button className="block-sign" id="languageButton" onClick={this.toggleLanguage}>English</button>
            <button className="block-sign" id="themeButton" onClick={this.toggleTheme}>Переключить тему</button>
            <button className="block-sign" id="sign">Sign Up</button>
            <button className="block-sign" id="aut">Authorization</button>
            <span id="usernameDisplay" style={{ display: 'none' }}></span>
            <button className="block-sign" id="logout" style={{ display: 'none' }}>Logout</button>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;