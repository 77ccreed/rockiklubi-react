import React, { Component } from 'react';
import "./../Css/App.css";
import "./../Css/Header.css";


class Header extends Component {
  render() {
    return (
    
      <header className="App-header">
        <h1 className="Header-text display-4"><span className="Header-text2" >Valga</span> Rockiklubi</h1>
        <h3 className="Header-text3 m-2 m-md-5">Aastast 2002</h3>
 
        <h4 className="Header-text5 m-2 m-md-4 text-left">Alternatiivklubi, kus propageeritakse elavat muusikat nii kodu kui välismaalt.</h4>
        <h2 className="Header-text6 m-2 m-md-5 text-left">Vanim rokiklubi Eestis</h2>
      </header>    
    );
  }
}

export default Header;