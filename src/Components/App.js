import React, {
  Component
} from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import "./../Css/App.css";
import HamburgerMenu from './Navbar';
import Header from './Header';
import Tehnikanimekiri from './Tehnikanimekiri';
import Tulemas from './Tulemas';
import Varasem from './Varasem';
import Map from './Map';
import Footer from './Footer';
import LazyLoad from 'react-lazyload';



class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
    <div className = "App" >
      <HamburgerMenu />  
      <Header / >
      <main >
      
      <Tulemas />
      <Tehnikanimekiri className="mt-3"/>
          <LazyLoad offset={100} once >

          <Varasem />
          </LazyLoad>
          </main> 
          <Map />
          <Footer />
      </div>
        </BrowserRouter>
    );
  }
}

export default App;