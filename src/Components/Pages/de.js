import React, {
  Component
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "./../../Css/App.css";
import HeaderDe from './../Component/ComponentDe/HeaderDe';
import TehnikanimekiriDe from './../Component/ComponentDe/TehnikanimekiriDe';
import TulemasDe from './../Component/ComponentDe/TulemasDe';
import Varasem from './../Component/Varasem';
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
            <TulemasDe />
            <TehnikanimekiriDe className="mt-3" />
            <LazyLoad height={"100vh"} offset={100} once >
              <Varasem />
            </LazyLoad>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default De;