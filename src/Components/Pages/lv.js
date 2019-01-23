import React, {
  Component
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "./../../Css/App.css";
import HeaderLv from './../Component/ComponentLv/HeaderLv';
import TehnikanimekiriLv from './../Component/ComponentLv/TehnikanimekiriLv';
import TulemasLv from './../Component/ComponentLv/TulemasLv';
import Varasem from './../Component/Varasem';
import LazyLoad from 'react-lazyload';


class Lv extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <html lang="lv" />
            <title>
              Notikumu organizēšana Valgā. Skaņas iekārtas, studijas un istabu noma.</title>
            <meta name="description" content="Todos on steroid!" />
          </Helmet>
          <HeaderLv />
          <main >
            <TulemasLv />
            <TehnikanimekiriLv className="mt-3" />
            <LazyLoad height={"100vh"} offset={100} once >
              <Varasem />
            </LazyLoad>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default Lv;