import React, { Component } from 'react';
import "./../Css/App.css";
import "./../Css/Header.css";


class Header extends Component {
  render() {
    return (
    
      <header className="App-header">
        <h1 className="Header-text"><span className="Header-text2" >Valga</span> Rockiklubi</h1>
        <h3 className="Header-text3">Aastast 2002</h3>
        <p className="Header-text6">Valga Rockiklubi - koht, mis rokib!</p>
        <p className="Header-text5">Alternatiivklubi, kus propageeritakse elavat muusikat nii kodu kui välismaalt.</p>
        <h4 className="Header-text4">Vanim rokiklubi Eestis</h4>
      </header>    
    );
  }
}

export default Header;