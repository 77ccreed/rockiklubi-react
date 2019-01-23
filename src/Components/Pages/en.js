import React, {
  Component
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "./../../Css/App.css";
import HeaderEn from './../Component/ComponentEn/HeaderEn';
import TulemasEn from './../Component/ComponentEn/TulemasEn';
import TehnikanimekiriEn from './../Component/ComponentEn/TehnikanimekiriEn';
import Varasem from './../Component/Varasem';
import LazyLoad from 'react-lazyload';


class En extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <html lang="en" />
            <title>
              Organization of events in Valga. Sound equipment, studio and room rental.</title>
            <meta name="description" content="Todos on steroid!" />
          </Helmet>
          <HeaderEn />
          <main >
            <TulemasEn />
            <TehnikanimekiriEn className="mt-3" />
            <LazyLoad height={"100vh"} offset={100} once >
              <Varasem />
            </LazyLoad>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default En;