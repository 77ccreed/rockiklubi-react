import React, { Component } from 'react';
import "./../Css/App.css";
import Header from './Header';
import Header2 from './Header2';
import UritusedCarousel from './Tulemas';
import TehnikaNimekiri from './Tehnika';
import VarasemUritused from './Varasem';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <main>
     <Header2 />
          <UritusedCarousel />
          <TehnikaNimekiri />
          <VarasemUritused />
      </main>
      </div>
    );
  }
}

export default App;
