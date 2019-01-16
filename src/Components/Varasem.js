import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import VarasemCarousel from './VarasemCarousel';
import Pilt from './Pilt';
import "./../Css/Carousel-bg.css";
import PropTypes from 'prop-types';

const Varasem = (props) => {
  return (
    <div>
      <Jumbotron fluid className="carousel-bg">
        <Container fluid>
          <div className="row">
            <div className="col-lg-6">
              <VarasemCarousel />
            </div>

            <div className="col-lg-4 text-left align-self-center mt-4">
              <h3 className="suurem-pealkiri p-2">Jutt toimunud ürituste ja klubi kohta</h3>
              <h5 className="väiksem-pealkiri p-2">Natukene pikem jutt - kokkuvõte. Paarkümmend sõna klubi ja toimunud ürituste kohta.</h5>
              <p className="tekst p-2">Mis on klubi eesmärk, kuidas sai alguse? 
          Kuidas iseloomustaksite Valga Rockiklubi? Mis asi see on? Kes on esinejad ja publik? Kas korraldate valdavalt ise sündmusi? Kas saate lisaks ka mingil määral toetust omavalitsuselt ja/või riigilt? Kuidas iseloomustaksite 2018. aastat Valga Rockiklubis? Mis on plaanid ja ootused järgnevaks aastaks? Kaua on klubi tegutsenud ja palju on selle aja jooksul esinejaid olnud. Kes on neist tuntumad tänasel päeval? Vanim rokiklubi Eestis? Koostöö teiste klubide ja organisatsioonidega. Kuidas saada klubi liikmeks?
</p>
            </div>
            <div className="col-md-9 offset-md-1 mt-xl-5 text-left">
              <h3 className="suurem-pealkiri p-2">Esinejad, keda eraldi välja tuua</h3>
              <h5 className="väiksem-pealkiri p-2">Natukene pikem jutt - kokkuvõte. Paarkümmend sõna esinejate kohta.</h5>
              <p className="tekst p-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aspernatur veniam, quisquam dolores quia iusto sapiente nobis! Autem, vel quam? Eos culpa vero, repudiandae repellat asperiores sunt minima enim dignissimos quia at perferendis pariatur earum consequatur harum similique, eum provident nostrum soluta quos veritatis? Animi ex tenetur ipsam praesentium aliquid pariatur voluptates doloribus alias fugit inventore, commodi cumque maxime obcaecati voluptatibus, sint quae earum nihil! Quas nulla blanditiis fugiat nam quasi atque, vero officiis possimus neque sint aliquid nisi.
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

export default Varasem;

Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};