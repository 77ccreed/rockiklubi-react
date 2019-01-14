import React, { Component } from 'react';
import "./../Css/App.css";
import "./../Css/Header.css";


class Header extends Component {
  render() {
    return ( 
     
      <header className="App-header">
         
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
        <h1 className="display-4 m-3 ml-md-5 text-left"><span className="Header-text2" >Valga</span> Rockiklubi</h1>
        <h6 className=" ml-3 ml-md-5 text-left">Aastast 2002 - vanim rokiklubi Eestis</h6>
            </div>
            <div className="d-none d-lg-block col-lg-4 viisnurk">

            </div>
        </div>
        </div>
      
      </header>  
    
    );
  }
}

export default Header;