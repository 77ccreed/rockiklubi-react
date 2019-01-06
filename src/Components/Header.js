import React, { Component } from 'react';
import "./../Css/App.css";
import "./../Css/Header.css";


class Header extends Component {
  render() {
    return (    
      <header className="App-header">
        <h1 className="display-4 m-3 ml-md-5 text-left"><span className="Header-text2" >Valga</span> <span className="Header-text">Rockiklubi</span></h1>
      </header>    
    );
  }
}

export default Header;