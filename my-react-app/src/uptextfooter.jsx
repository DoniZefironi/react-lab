import React, { Component } from 'react';

class UpTextFooter extends Component {
  render() {
    const { organization } = this.props;
    return (
<div class="uptextfooter">
<div class="contactus">
    <h3 id="svjaz"></h3>
    <div class="textcontactus">
        <p id="chtob"></p>
        <p id="dlya"></p>
        <p id="tek"></p>
        <a href="https://mail.google.com/mail/u/0/#inbox">VladNeckt@gmail.com</a>
        <a href="tel:+375296081350" id="poz"></a>
        <a href="https://github.com/DoniZefironi">github</a>
        <a href="#" id="openkart"></a>
    </div>
</div>
<div class="opening">
    <h3 id="chas"></h3>
    <div class="textopening">
        <p id="vtornkib1"></p>
        <p id="pat1"></p>
    </div>
</div>
<div class="socials">
    <h3 id="socialen"></h3>
    <p>INSTAGRAM</p>
    <p>FACEBOOK</p>
</div>
</div>
    );
  }
}

export default UpTextFooter;
