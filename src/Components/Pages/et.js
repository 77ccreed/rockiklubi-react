import React, {
  Component
} from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import "./../../Css/App.css";
import Header from './../Component/Header';
import Tehnikanimekiri from './../Component/Tehnikanimekiri';
import Tulemas from './../Component/Tulemas';
import Varasem from './../Component/Varasem';
import Map from './../Component/Map';
import Footer from './../Component/Footer';
import LazyLoad from 'react-lazyload';



class Et extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <title>Ürituste korraldamine Valgas. Helitehnika, stuudio ja ruumide rent.</title>
            <meta name="description" content="Todos on steroid!" />
          </Helmet>
          <Header />
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

export default Et;