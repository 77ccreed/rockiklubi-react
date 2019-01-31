import React, {
  Component
} from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import PageProgress from 'react-page-progress';
import "./../../Css/App.css";
import Header from './../Component/Header';
import Tehnikanimekiri from './../Component/Tehnikanimekiri';
import Tulemas from './../Component/Tulemas';
import Varasem from './../Component/Varasem';


class Et extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <html lang="et" />
            <title>Ürituste korraldamine Valgas. Heli-, valgustehnika ja stuudio rent.</title>
            <meta name="description" content="" />
          </Helmet>
          <PageProgress color={'#FCBF49'} />
          <Header />
          <main >
            <Tulemas />
            <Tehnikanimekiri className="mt-3" />
              <Varasem />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default Et;