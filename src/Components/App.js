import React, {
  Component
} from 'react';
import "./../Css/App.css";
import HamburgerMenu from './Navbar';
import Header from './Header';
import Header2 from './Header2';
import Header3 from './Header3';
import Tehnikanimekiri from './Tehnikanimekiri';
import Tulemas from './Tulemas';
import Varasem from './Varasem';
import Footer from './Footer';



class App extends Component {
  render() {
    return ( 
    <div className = "App" >
      <HamburgerMenu />
      <Header / >
      <main >
      <Header2 / >
        
      <Tulemas />
        
          <Header3 />
      <Tehnikanimekiri className="mt-3"/>
       
          <Varasem />
        
          <Footer />
      </main> 
      </div>
    );
  }
}

export default App;