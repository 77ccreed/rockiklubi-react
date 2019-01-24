import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import VarasemCarousel from './../VarasemCarousel';
import "./../../../Css/Carousel-bg.css";
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';


const VarasemDe = (props) => {
  return (
    <React.Fragment>
      <Jumbotron fluid className="carousel-bg mb-0">
        <Container fluid>
          <div className="row">
            <div className="col-lg-6">
              <Fade bottom>
                <VarasemCarousel />
              </Fade>
            </div>

            <div className="col-lg-4 offset-lg-1 text-left align-self-center mt-4">
              <Fade bottom>
                <h3 className="suurem-pealkiri p-2">Jutt toimunud ürituste ja klubi kohta</h3>
              </Fade>
              <Fade bottom>
                <h5 className="väiksem-pealkiri p-2">Natukene pikem jutt - kokkuvõte. Paarkümmend sõna klubi ja toimunud
              ürituste kohta.</h5>
              </Fade>
              <Fade bottom>
                <p className="tekst p-2">Mis on klubi eesmärk, kuidas sai alguse?
                  Kuidas iseloomustaksite Valga Rockiklubi? Mis asi see on? Kes on esinejad ja publik? Kas korraldate
                  valdavalt ise sündmusi? Kas saate lisaks ka mingil määral toetust omavalitsuselt ja/või riigilt? Kuidas
                  iseloomustaksite 2018. aastat Valga Rockiklubis? Mis on plaanid ja ootused järgnevaks aastaks? Kaua on
                  klubi tegutsenud? Vanim rokiklubi Eestis? Koostöö teiste klubide ja organisatsioonidega. Kuidas saada
                  klubi liikmeks? Palju on esinejaid olnud. Kes on neist tuntumad tänasel päeval jne.?
            </p>
              </Fade>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </React.Fragment>
  );
};

export default VarasemDe;

Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};