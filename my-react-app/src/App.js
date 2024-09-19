import React, { Component } from 'react';
import Header from './Component/header';
import PlaceComponent from './Component/placecomponent';
import Footer from './Component/footer'
import './App.css';
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
