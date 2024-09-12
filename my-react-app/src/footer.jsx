import React, { Component } from 'react';
import UpTextFooter from './uptextfooter';

class Footer extends Component {
  render() {
    const { organization } = this.props;
    return (
        <footer>
        <div class="imgfooter">
        </div>
        <div class="textfooter">
        <UpTextFooter />
            <div class="downfooter">
                <p>© 2022 WAYGOOD</p>
                <p id="slova"></p>
                <p id="photo"></p>
                <p id="disain"></p>
            </div>
        </div>
    </footer>
    );
  }
}

export default Footer;