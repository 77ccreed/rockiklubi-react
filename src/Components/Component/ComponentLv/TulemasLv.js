import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import UritusedCarousel from './../UritusedTulemas';
import "./../../../Css/Carousel-bg.css";
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

const TulemasLv = (props) => {
  return (
    <React.Fragment>
      <Jumbotron fluid className="carousel-bg">
        <Container fluid>
          <div className="row">
            <div className="col-lg-6 mb-lg-5">
              <Fade bottom>
                <h3 className="suurem-pealkiri m-2">Peatselt klubis</h3>
              </Fade>
              <Fade bottom>
                <UritusedCarousel />
              </Fade>
            </div>

            <div className="col-md-10 col-lg-5 ml-md-5 ml-lg-1 text-left align-self-center mt-5">
              <Fade bottom>
                <h3 className="suurem-pealkiri p-2">Jutt ürituste kohta</h3>
              </Fade>
              <Fade bottom>
                <h5 className="väiksem-pealkiri p-2">Natukene pikem jutt - kokkuvõte. Paarkümmend sõna tulevaste ürituste
              ja klubi kohta.</h5>
              </Fade>
              <Fade bottom>
                <p className="tekst p-2">Ürituste korraldamine Valgas. Kes on esinejad ja publik? Kuidas kujuneb välja
                  programm? Kustkohast on pärit esinejad.
                  Mitu sündmust aastas toimus? Mis toimub suvel? Mis muusikastiilid? Mis on programmi koostamisel tähtsaim?
                  Kas programmil on mingisugused piirid? Mida teha kui tahaks esineda vms.? Märksõnad, mida võiks kasutada:
                  üritused, Valga, muusika, bändid,
            </p>
              </Fade>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </React.Fragment>
  );
};

export default TulemasLv;

Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};