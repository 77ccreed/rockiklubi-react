import React, {
  Component
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "./../../Css/App.css";
import HeaderFi from '../Component/ComponentFi/HeaderFi';
import TehnikanimekiriFi from './../Component/ComponentFi/TehnikanimekiriFi';
import TulemasFi from './../Component/ComponentFi/TulemasFi';
import Varasem from './../Component/Varasem';
import LazyLoad from 'react-lazyload';


class Fi extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <html lang="fi" />
            <title>
              Tapahtumien järjestäminen Valgassa. Äänilaitteet, studio- ja huonevuokraus.</title>
            <meta name="description" content="Todos on steroid!" />
          </Helmet>
          <HeaderFi />
          <main >
            <TulemasFi />
            <TehnikanimekiriFi className="mt-3" />
            <LazyLoad height={"100vh"} offset={100} once >
              <Varasem />
            </LazyLoad>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default Fi;