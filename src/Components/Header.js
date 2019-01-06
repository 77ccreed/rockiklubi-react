import React, { Component } from 'react';
import "./../Css/App.css";
import "./../Css/Header.css";


class Header extends Component {
  render() {
    return (
    
      <header className="App-header">
        <h1 className="display-4 m-2 ml-md-5 text-left"><span className="Header-text2" >Valga</span> <span className="Header-text" >Rockiklubi</span></h1>
        <h3 className="Header-text3 m-2 ml-md-5 text-left">Alternatiivklubi, kus propageeritakse elavat muusikat nii kodu kui välismaalt.</h3>
 
        {/*<h4 className="Header-text5 m-2 m-md-4 text-left">Alternatiivklubi, kus propageeritakse elavat muusikat nii kodu kui välismaalt.</h4>*/}
        {/* <h2 className="Header-text6 m-1 m-md-5 text-lg-left ml-lg-5">Vanim rokiklubi Eestis</h2>*/}
      </header>    
    );
  }
}

export default Header;