import React, { Component } from 'react';
import './style/downtextfooter.css';

class DownFooter extends Component {
  render() {
    const { organization } = this.props;
    return (
        <div class="downfooter">
        <p>© 2022 WAYGOOD</p>
        <p id="slova">Words by Mia Barry</p>
        <p id="photo">Photography by Chris Paulsen</p>
        <p id="disain">Design by After Hours Studio</p>
    </div>
    );
  }
}

export default DownFooter;
