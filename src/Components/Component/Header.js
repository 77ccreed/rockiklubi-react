import React, { Component } from 'react';
import "./../../Css/App.css";
import "./../../Css/Header.css";
import { Spring } from 'react-spring';



class Header extends Component {
render() {
return (
<header className="App-header">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-8">
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => <div style={props}>
            <h1 className="display-4 mt-3 mr-3 ml-3 mb-1  ml-md-5 text-left"><span className="Header-text2">Valga</span> rokiklubi</h1>
            <h6 className=" ml-3 ml-md-5 text-left">Aastast 2002 - vanim rokiklubi Eestis</h6>
          </div>}
        </Spring>
      </div>
    </div>
  </div>
</header>
);
}
}

export default Header;