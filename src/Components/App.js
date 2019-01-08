import React, {
  Component
} from 'react';
import "./../Css/App.css";
import Header from './Header';
import Header2 from './Header2';
import Header3 from './Header3';
import Tehnikanimekiri from './Tehnikanimekiri';
import UritusedCarousel from './Tulemas';
import VarasemUritused from './Varasem';
import Footer from './Footer';
class App extends Component {
  render() {
    return ( 
    <div className = "App" >
      <Header / >
      <main >
      <Header2 / >
        
      <h3 className = "m-3 h3">Varsti tulemas</h3> 
          <UritusedCarousel />
          <br></br>
          <Header3 />
      <Tehnikanimekiri className="mt-3"/>
          <br></br>
          <h3 className="m-3 h3">Varasem</h3>
          <VarasemUritused />
          <br></br>
          <Footer />
      </main> 
      </div>
    );
  }
}

export default App;