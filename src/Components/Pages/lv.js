import React, {
  Component
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PageProgress from 'react-page-progress';
import "./../../Css/App.css";
import TehnikanimekiriLv from './../Component/ComponentLv/TehnikanimekiriLv';
import TulemasLv from './../Component/ComponentLv/TulemasLv';
import VarasemLv from './../Component/ComponentLv/VarasemLv';


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
          <PageProgress color={'#F2BB05'} />
          <main >
            <TulemasLv />
            <TehnikanimekiriLv className="mt-3" />
              <VarasemLv />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default Lv;