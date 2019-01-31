import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import UritusedCarousel from './UritusedTulemas';
import "./../../Css/Carousel-bg.css";
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

const Tulemas = (props) => {
return (
<React.Fragment>
  <Jumbotron fluid className="carousel-bg">
    <Container fluid>
      <div className="row">
          <div className="col-lg-6 mb-lg-5 align-self-center">
          <Fade bottom>
            <h3 className="suurem-pealkiri m-2">Peatselt tulemas</h3>
          </Fade>
          <Fade bottom>
            <UritusedCarousel />
          </Fade>
        </div>

        <div className="col-md-10 col-lg-5 ml-md-5 ml-lg-1 text-left align-self-center mt-5">
          <Fade bottom>
              <h3 className="suurem-pealkiri p-2">Kontserdid vanas linnasaunas.</h3>
          </Fade>
          <Fade bottom>
              <h5 className="väiksem-pealkiri p-2">Juba üle viieteistkümne aasta korraldame üritusi Valgas, vana linnasauna teisel korrusel.</h5>
          </Fade>
            <Fade bottom>
              <p className="tekst p-2">
Omal ajal oli vaja bändi tegemiseks ruume. Peale tegutsemist mitmes erinevas kohas üle linna, saime tänu linnavalitsusele 
võimaluse kasutada linnasauna tühjana seisvat teist korrust. Ajapikku laienedes ja ruume korrastades oleme siia pidama jäänud
            </p>
            </Fade>
            <Fade bottom>
              <p className="tekst p-2">
   Klubi tegeleb muusikaürituste korraldamisega. Pakume klubiliikmetele ja sõpradele kohta kus nautida head seltskonda ja elavat muusikat.
             Põhiliselt esinevad rock-, metal- ja punkbändid. Programmi koostamisel on esmatähtis  stiilide ühtivus. 
             Kõige tähtsam on see, et muusika oleks hea, kaasahaarav. 
            </p>
            </Fade>
            <Fade bottom>
              <p className="tekst p-2">
       Sügisest kevadeni korraldame klubis keskeltläbi kümme kontserti aastas. Prooviruumid ja stuudio tegutsevad aastaringselt. 
         Suvel oleme seotud mitmete väliürituste korraldamisega ja teeme koostööd teiste klubide ja MTÜ-dega. 
            </p>
            </Fade>
        </div>
      </div>
    </Container>
  </Jumbotron>
</React.Fragment>
);
};

export default Tulemas;

Jumbotron.propTypes = {
// Pass in a Component to override default element
tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
fluid: PropTypes.bool,
className: PropTypes.string
};