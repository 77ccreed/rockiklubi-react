import React, {
  Component
} from 'react';
import "./../Css/App.css";
import AppRouter from './Routers/AppRouter';


class App extends Component {
  render() {
    return ( 
     <AppRouter />
    );
  }
}

export default App;