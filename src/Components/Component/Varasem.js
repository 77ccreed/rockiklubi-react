import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import VarasemCarousel from './VarasemCarousel';
import "./../../Css/Carousel-bg.css";
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

const Varasem = (props) => {
return (
<React.Fragment>
  <Jumbotron fluid className="carousel-bg mb-0">
    <Container fluid>
      <div className="row">
        <div className="col-lg-6">
            <Fade bottom>
              <h3 className="suurem-pealkiri m-2">Varasemad kontsertid</h3>
            </Fade>
          <Fade bottom>
            <VarasemCarousel />
          </Fade>
        </div>

          <div className="col-md-10 col-lg-4 offset-lg-1 ml-md-5 ml-lg-1 text-left align-self-center mt-4">
          <Fade bottom>
              <h3 className="suurem-pealkiri p-2">Värvikad esinejad ja publik.</h3>
          </Fade>
          <Fade bottom>
            <h5 className="väiksem-pealkiri p-2">
Aja jooksul on klubist läbi käinud üle kolmesaja bändi Eestist, naabermaadest ja kaugemalt.
            </h5>
          </Fade>
            <Fade bottom>
              <p className="tekst p-2">
Kui mainida mõnd tuntumat kohalikest Eesti esinejatest siis J.M.K.E., Paha Polly, Kosmikud, No Big Silence, Vennaskond, Pööloy Gläänz, 
Zorg, Sybil Vane, Defeatem. Samuti Contra ja Andres Roots on meil üles astunud. 
              </p>
            </Fade>
            <Fade bottom>
              <p className="tekst p-2">
                Esinejate leidmine ei ole ka liialt keeruline, üldiselt tuntakse meie vastu ikka huvi, sest oleme tegutsenud juba pikka aega ja saavutanud tuntuse hea esinemispaigana. Praegusel ajal teeme keskeltläbi ühe kontserti kuus.
            </p>
            </Fade>
            <Fade bottom>
              <p className="tekst p-2">
              Kontserdid on olnud head, külastajate seas on näha üha rohkem ja rohkem noori. Tundub, et pealekasvu on nii klubi liikmete kui esinejate
  ja külastajate seas.
              </p>
            </Fade>
        </div>
      </div>
    </Container>
  </Jumbotron>
</React.Fragment>
);
};

export default Varasem;

Jumbotron.propTypes = {
// Pass in a Component to override default element
tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
fluid: PropTypes.bool,
className: PropTypes.string
};