import React, {
  Component
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PageProgress from 'react-page-progress';
import "./../../Css/App.css";
import HeaderEn from './../Component/ComponentEn/HeaderEn';
import TulemasEn from './../Component/ComponentEn/TulemasEn';
import TehnikanimekiriEn from './../Component/ComponentEn/TehnikanimekiriEn';
import VarasemEn from './../Component/ComponentEn/VarasemEn';


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
          <PageProgress color={'#FCBF49'} />
          <HeaderEn />
          <main >
            <TulemasEn />
            <TehnikanimekiriEn className="mt-3" />
              <VarasemEn />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default En;