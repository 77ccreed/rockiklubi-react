import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import VarasemCarousel from './../VarasemCarousel';
import Pilt from './../Pilt';
import "./../../../Css/Carousel-bg.css";
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

const VarasemFi = (props) => {
  return (
    <div>
      <Jumbotron fluid className="carousel-bg mb-0">
        <Container fluid>
          <div className="row">
            <div className="col-lg-6">
              <LazyLoad height={'100%'} once>
                <VarasemCarousel />
              </LazyLoad>
            </div>

            <div className="col-lg-4 offset-lg-1 text-left align-self-center mt-4">
              <h3 className="suurem-pealkiri p-2">Tarina tapahtumista ja klubista</h3>
              <h5 className="väiksem-pealkiri p-2">Natukene pikem jutt - kokkuvõte. Paarkümmend sõna klubi ja toimunud ürituste kohta.</h5>
              <p className="tekst p-2">Mis on klubi eesmärk, kuidas sai alguse?
          Kuidas iseloomustaksite Valga Rockiklubi? Mis asi see on? Kes on esinejad ja publik? Kas korraldate valdavalt ise sündmusi? Kas saate lisaks ka mingil määral toetust omavalitsuselt ja/või riigilt? Kuidas iseloomustaksite 2018. aastat Valga Rockiklubis? Mis on plaanid ja ootused järgnevaks aastaks? Kaua on klubi tegutsenud? Vanim rokiklubi Eestis? Koostöö teiste klubide ja organisatsioonidega. Kuidas saada klubi liikmeks?
</p>
            </div>
            <div className="col-md-9 offset-md-1 mt-lg-5 text-left">
              <h3 className="suurem-pealkiri p-2">Esinejad, keda eraldi välja tuua</h3>
              <h5 className="väiksem-pealkiri p-2">Natukene pikem jutt - kokkuvõte. Paarkümmend sõna esinejate kohta.</h5>
              <p className="tekst p-2"> Palju on esinejaid olnud. Kes on neist tuntumad tänasel päeval jne.?
</p>
            </div>
            <div className="col-12 mt-xl-5">
              <Pilt />
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default VarasemFi;

Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};