import React, {
  Component
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "./../../Css/App.css";
import HeaderFi from './../Component/ComponentFi/FeaderFi';
import Tehnikanimekiri from './../Component/Tehnikanimekiri';
import Tulemas from './../Component/Tulemas';
import Varasem from './../Component/Varasem';
import Map from './../Component/Map';
import Footer from './../Component/Footer';
import LazyLoad from 'react-lazyload';


class Fi extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <title>
              Tapahtumien järjestäminen Valgassa. Äänilaitteet, studio- ja huonevuokraus.</title>
            <meta name="description" content="Todos on steroid!" />
          </Helmet>
          <HeaderFi />
          <main >
            <Tulemas />
            <Tehnikanimekiri className="mt-3" />
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

export default Fi;