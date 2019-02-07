import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./../../../Css/App.css";
import "./../../../Css/Tehnikanimekiri.css";
import TehnikaItemDe from './TehnikaItemDe';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

const TehnikanimekiriDe = (props) => {
return (
  <React.Fragment>
    <Jumbotron fluid className="Tehnikanimekiri">
      <Container fluid>
        <div className="row">
          <div className="col-lg-4">
            <Fade bottom>
              <h3 className="pt-3 suurem-pealkiri-hele">Tehnika</h3>
            </Fade>
            <TehnikaItemDe />
          </div>

          <div className="col-md-10 col-lg-6 offset-lg-1 ml-md-5 ml-lg-1 text-left align-self-center mt-5">
            <Fade bottom>
              <h3 className="suurem-pealkiri-hele p-2">Korraldame üritusi enda valgus- ja helitehnikaga.</h3>
            </Fade>
            <Fade bottom>
              <h5 className="väiksem-pealkiri-hele p-2">Oleme valmis tehnikat välja rentima ka väljaspool maja aset
              leidvate sündmuste jaoks. Samuti on meil sisustatud stuudio.</h5>
            </Fade>
            <Fade bottom>
              <h5 className="väiksem-pealkiri-hele p-2"> VRK Stuudio võtab vastu kõiki stiile esindavaid bände.
              Salvestuse hind on kokkuleppel.</h5>
            </Fade>
          </div>
        </div>
      </Container>
    </Jumbotron>
  </React.Fragment>
);
};

export default TehnikanimekiriDe;

Jumbotron.propTypes = {
// Pass in a Component to override default element
tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
fluid: PropTypes.bool,
className: PropTypes.string
};