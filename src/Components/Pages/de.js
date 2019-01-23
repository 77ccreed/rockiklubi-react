import React, {
  Component
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "./../../Css/App.css";
import HeaderDe from './../Component/ComponentDe/HeaderDe';
import TehnikanimekiriDe from './../Component/ComponentDe/TehnikanimekiriDe';
import TulemasDe from './../Component/ComponentDe/TulemasDe';
import VarasemDe from './../Component/ComponentDe/VarasemDe';


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
              <VarasemDe />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default De;