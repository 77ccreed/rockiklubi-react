import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import VarasemCarousel from './VarasemCarousel';
import "./../Css/Carousel-bg.css";

const Varasem = (props) => {
  return (
    <div>
      <Jumbotron fluid className="carousel-bg">
        <Container fluid>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="suurem-pealkiri m-2">Varasem</h3>
              <VarasemCarousel />
            </div>

            <div className="col-lg-4 text-left align-self-center mt-4">
              <h3 className="suurem-pealkiri p-2">Jutt toimunud ürituste kohta</h3>
              <h5 className="väiksem-pealkiri p-2">Natukene pikem jutt - kokkuvõte. Paarkümmend sõna. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos iste voluptas! Quae eaque totam ullam unde corporis nulla numquam!</h5>
              <p className="tekst p-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nulla reiciendis unde exercitationem sint deleniti amet neque enim porro corporis similique, itaque nobis nisi. Debitis magni ad quam inventore explicabo excepturi eligendi eius tenetur. Aperiam consequuntur tenetur eius accusantium molestiae nisi neque earum aut, mollitia tempora consectetur fuga, qui adipisci! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo esse earum voluptates reiciendis officiis, voluptate, debitis fugit maxime, beatae assumenda culpa placeat optio. Modi error ex sit quidem quos voluptate molestiae quia, doloremque, ratione tempore laudantium. Cum dolorem quos esse velit consequuntur, voluptatem tempora! Obcaecati, repudiandae voluptatum. Aspernatur consequuntur eligendi quisquam quia! Aspernatur hic velit dicta ratione tempora sunt beatae cumque id aliquam?
</p>
            </div>

          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Varasem;