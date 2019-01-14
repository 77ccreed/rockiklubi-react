import React, {
  Component
} from 'react';
import "./../Css/App.css";
import HamburgerMenu from './Navbar';
import Header from './Header';
import Tehnikanimekiri from './Tehnikanimekiri';
import Tulemas from './Tulemas';
import Varasem from './Varasem';
import Footer from './Footer';
import { Parallax, ParallaxLayer } from "react-spring"



class App extends Component {
  render() {
    return ( 
  
    <div className = "App" >
        
      <HamburgerMenu />
      
      <Header / >
       
      <main >
      
        
      <Tulemas />
       
          
      <Tehnikanimekiri className="mt-3"/>
          
          <Varasem />
          </main> 

          <Footer />
      
      </div>
    );
  }
}

export default App;