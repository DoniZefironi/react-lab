import React, { Component } from 'react';
import './App.css';
import Header from './header';
import PlaceComponent from './placecomponent';
import Footer from './footer'

class App extends Component {
  render() {
    const organizationName = "Waygood";
      return (
          <div>
              <Header organization={organizationName} />
              <PlaceComponent />
              <Footer />
          </div>
      );
  }
}

export default App;
