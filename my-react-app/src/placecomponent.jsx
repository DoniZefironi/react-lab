import React, { Component } from 'react';

    class PlaceComponent extends Component {
        render() {
            const { organization } = this.props;
  return (
    <div className="place" id="place">
      <div className="placetext">
        <div className="placete">
          <h2 id="mesto">A MEETING PLACE FOR LOCAL RESIDENTS OF RICHMOND.{organization}</h2>
          <p id="ivse">(AND ALL THE OTHERS).</p>
        </div>
        <div className="placeimg">
        </div>
      </div>
      <div className="imgplaceimg">
        <div className="imgplace">
        </div>
      </div>
    </div>
  );
}
};

export default PlaceComponent;