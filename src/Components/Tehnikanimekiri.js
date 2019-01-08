import React, { Component } from 'react';
import "./../Css/App.css";
import "./../Css/Tehnikanimekiri.css";
import Pa from './Pa';
import FohMixer from './FohMixer';
import Monitor from './Monitor';
import Microphones from './Microphones';
import Backline from './Backline';
import Drumms from './Drumms';
import Salvestus from './Salvestus';


class Header extends Component {
  render() {
    return (
     
      <div className="Tehnikanimekiri">
        
        <div>
          <h3 className="m-2 p-2">Tehnika</h3>
          <Pa className="m-2 p-2 " />
          <FohMixer className="m-2 p-2" />
          <Monitor className="m-2 p-2" />
          <Microphones className="m-2 p-2" />
          <Backline className="m-2 p-2" />
          <Drumms className="m-2 p-2" />
          <Salvestus className="m-2 p-2" />
          </div>        
        </div>
    );
  }
}

export default Header;