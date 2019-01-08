import React, {
  Component
} from 'react';
import "./../Css/App.css";
import Header from './Header';
import Header2 from './Header2';
import Tehnikanimekiri from './Tehnikanimekiri';
import plakat from './09.11.2018.jpg';
class App extends Component {
  render() {
    return ( 
    <div className = "App" >
      <Header / >
      <main >
      <Header2 / >
      <h3 className = "m-3" >Varsti tulemas</h3> 
      <figure >
      <img src = {plakat}
      alt = "Elephant at sunset" ></img>
      </figure>  
      <Tehnikanimekiri className="mt-3"/>
      </main> 
      </div>
    );
  }
}

export default App;