import React, { Component } from 'react';
import "./../Css/App.css";
import "./../Css/Tehnikanimekiri.css";
import Pa from './Pa';
import FohMixer from './FohMixer';
import Monitor from './Monitor';
import Microphones from './Microphones';
import Backline from './Backline';
import Drumms from './Drumms';


class Header extends Component {
  render() {
    return (
     
      <div className="Tehnikanimekiri row" >
        <h3 className="m-2">Tehnika</h3>
        <Pa className="m-2" />
        <FohMixer className="m-2" />
        <Monitor className="m-2" />
        <Microphones className="m-2" />
        <Backline className="m-2" />
        <Drumms className="m-2" />
        </div>
    );
  }
}

export default Header;