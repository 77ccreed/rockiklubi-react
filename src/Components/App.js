import React, { Component } from 'react';
import "./../Css/App.css";
import Header from './Header';
import Header2 from './Header2';
import UritusedCarousel from './Tulemas';
import TehnikaNimekiri from './Tehnika';
import VarasemUritused from './Varasem';
import plakat from './09.11.2018.jpg';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <main>
     <Header2 />
          <figure>
            <img src={plakat}
              alt="Elephant at sunset"></img>
              <figcaption>An elephant at sunset</figcaption>
</figure>
          <TehnikaNimekiri />
       
      </main>
      </div>
    );
  }
}

export default App;
