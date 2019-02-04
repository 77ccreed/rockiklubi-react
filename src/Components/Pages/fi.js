import React, {
  Component
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PageProgress from 'react-page-progress';
import "./../../Css/App.css";
import TehnikanimekiriFi from './../Component/ComponentFi/TehnikanimekiriFi';
import TulemasFi from './../Component/ComponentFi/TulemasFi';
import VarasemFi from './../Component/ComponentFi/VarasemFi';


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
          <PageProgress color={'#FCBF49'} />
          <main >
            <TulemasFi />
            <TehnikanimekiriFi className="mt-3" />
              <VarasemFi />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default Fi;