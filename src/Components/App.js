import React, { Component } from 'react';
import "./../Css/App.css";
import Header from './Header';
import Uritused from './Uritused';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <main>
     <Uritused />
      </main>
      </div>
    );
  }
}

export default App;
