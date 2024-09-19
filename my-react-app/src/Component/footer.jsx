import React, { Component } from 'react';
import UpTextFooter from './uptextfooter';
import DownFooter from './downfooter';
import './style/footer.css';

class Footer extends Component {
  render() {
    const { organization } = this.props;
    return (
        <footer>
        <div class="imgfooter">
        </div>
        <div class="textfooter">
        <UpTextFooter />
        <DownFooter />
        </div>
    </footer>
    );
  }
}

export default Footer;