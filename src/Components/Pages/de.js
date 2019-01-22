import React, {
  Component
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "./../../Css/App.css";
import HeaderDe from './../Component/ComponentDe/HeaderDe';
import Tehnikanimekiri from './../Component/Tehnikanimekiri';
import Tulemas from './../Component/Tulemas';
import Varasem from './../Component/Varasem';
import Map from './../Component/Map';
import Footer from './../Component/Footer';
import LazyLoad from 'react-lazyload';


class De extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <html lang="de" />
            <title>
              Organisation von Veranstaltungen in Valga. Tonausrüstung, Studio- und Raummiete.</title>
            <meta name="description" content="Todos on steroid!" />
          </Helmet>
          <HeaderDe />
          <main >
            <Tulemas />
            <Tehnikanimekiri className="mt-3" />
            <LazyLoad height={"100vh"} offset={100} once >
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

export default De;