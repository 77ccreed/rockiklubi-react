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
import LazyLoad from 'react-lazyload';



class App extends Component {
  render() {
    return ( 

    <div className = "App" >
      <HamburgerMenu />  
      <Header / >
      <main >
      
      <Tulemas />
      <Tehnikanimekiri className="mt-3"/>
          <LazyLoad height={20} offset={100} once >

          <Varasem />
          </LazyLoad>
          </main> 
          <Footer />
      </div>
   
    );
  }
}

export default App;