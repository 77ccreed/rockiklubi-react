import React, {
  Component
} from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
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
            <title>Ürituste korraldamine Valgas. Helitehnika, stuudio ja ruumide rent.</title>
            <meta name="description" content="Todos on steroid!" />
          </Helmet>
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