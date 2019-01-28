  import React from 'react';
  import { Jumbotron, Container } from 'reactstrap';
  import "./../../Css/App.css";
  import "./../../Css/Tehnikanimekiri.css";
  import Pa from './Pa';
  import FohMixer from './FohMixer';
  import Monitor from './Monitor';
  import Microphones from './Microphones';
  import Backline from './Backline';
  import Drumms from './Drumms';
  import Salvestus from './Salvestus';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

  const Tehnikanimekiri = (props) => {
    return (
      <React.Fragment>
        <Jumbotron fluid className="Tehnikanimekiri">
          <Container fluid>
            <div className="row">
              <div className="col-lg-4">
                <Fade bottom>
                  <h3 className="m-2 p-2 pt-3 suurem-pealkiri-hele">Tehnika</h3>
                </Fade>
                <Fade bottom>
                  <Pa className="m-2 p-2" />
                </Fade>
                <Fade bottom>
                  <FohMixer className="m-2 p-2" />
                </Fade>
                <Fade bottom>
                  <Monitor className="m-2 p-2" />
                </Fade>
                <Fade bottom>
                  <Microphones className="m-2 p-2" />
                </Fade>
                <Fade bottom>
                  <Backline className="m-2 p-2" />
                </Fade>
                <Fade bottom>
                  <Drumms className="m-2 p-2" />
                </Fade>
                <Fade bottom>
                  <Salvestus className="m-2 p-2" />
                </Fade>
              </div>

              <div className="col-lg-6 offset-lg-1 text-left align-self-center mt-5">
                <Fade bottom>
                  <h3 className="suurem-pealkiri-hele p-2">Heli- ja valgustehnika, stuudio ja ruumide rent.</h3>
                </Fade>
                <Fade bottom>
                  <h5 className="väiksem-pealkiri-hele p-2">Natukene pikem jutt - kokkuvõte. Paarkümmend sõna stuudio ja
              tehnika kohta. </h5>
                </Fade>
                <Fade bottom>
                  <p className="tekst-hele p-2">Heli- ja valgustehnika, stuudio ja ruumide rent.
                    Kellele mõeldud ja mis on hinnad. Kas tehnikat saab rentida mujal kasutamiseks ja mis on suuremad
                    üritused, kus seda on kasutatud. Mis on tehnika kvaliteet. Kuidas see on aja jooksul kokku saadud ja mida
                    tahaks/oleks vaja veel juurde hankida. Märksõnad, mida võiks kasutada: stuudio, Valga, hinnad, muusika
                    salvestamine, stuudioaegade broneerimine ja stuudio rent, heli- ja valgustehnika
            </p>
                </Fade>
              </div>
            </div>
          </Container>
        </Jumbotron>
      </React.Fragment>
    );
  };

  export default Tehnikanimekiri;

Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};