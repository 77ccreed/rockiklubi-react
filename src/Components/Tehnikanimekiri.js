  import React from 'react';
  import { Jumbotron, Container } from 'reactstrap';
  import "./../Css/App.css";
  import "./../Css/Tehnikanimekiri.css";
  import Pa from './Pa';
  import FohMixer from './FohMixer';
  import Monitor from './Monitor';
  import Microphones from './Microphones';
  import Backline from './Backline';
  import Drumms from './Drumms';
  import Salvestus from './Salvestus'

  const Tehnikanimekiri = (props) => {
    return (
      <div>
        <Jumbotron fluid className="Tehnikanimekiri">
          <Container fluid>
            <div className="row">
              <div className="col-lg-4">
                <h3 className="m-2 p-2 pt-3 suurem-pealkiri-hele">Tehnika</h3>
                <Pa className="m-2 p-2 " />
                <FohMixer className="m-2 p-2" />
                <Monitor className="m-2 p-2" />
                <Microphones className="m-2 p-2" />
                <Backline className="m-2 p-2" />
                <Drumms className="m-2 p-2" />
                <Salvestus className="m-2 p-2" />
              </div>


              <div className="col-lg-8 text-left text align-self-center mt-4">
                <h3 className="suurem-pealkiri-hele p-2">Jutt tehnika kohta</h3>
                <h5 className="väiksem-pealkiri-hele p-2">Natukene pikem jutt - kokkuvõte. Paarkõmmend sõna. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos iste voluptas! Quae eaque totam ullam unde corporis nulla numquam!</h5>
                <p className="tekst-hele p-2">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eos modi explicabo mollitia temporibus cumque corrupti odio eaque totam reprehenderit? Reiciendis tempore fuga velit, sapiente alias doloremque similique voluptatibus autem molestias eveniet asperiores nesciunt. Ab quaerat ut impedit fugit? Voluptate earum quibusdam recusandae expedita facere quisquam autem nam explicabo ullam, iste amet. Aliquid veniam ducimus illo animi omnis architecto officia corporis at molestias harum, maxime voluptates, odio ratione cupiditate, voluptatum laboriosam deleniti distinctio quibusdam nobis nemo magnam quo! Iste facilis consectetur harum iusto, tempore repudiandae aliquam fuga enim voluptas accusamus ratione, molestias nihil ab accusantium placeat corrupti, numquam sunt. Fuga sunt sit aperiam exercitationem temporibus doloremque numquam, inventore incidunt quisquam a et laudantium illo maxime alias aliquam nobis nostrum laboriosam odit laborum quasi. Architecto necessitatibus saepe veniam magnam nam vero dolor, sint aliquid ad distinctio hic! Cum unde et ullam itaque laboriosam in repudiandae corrupti dolorem provident? Totam, quod impedit? Asperiores sapiente hic, praesentium temporibus voluptatibus molestiae beatae ad similique eius quod provident natus quasi? Atque voluptatem exercitationem officia reiciendis inventore nemo maxime deserunt minus aperiam, repudiandae unde doloribus voluptates est nisi nesciunt perspiciatis ex nobis suscipit, cupiditate explicabo itaque! Amet eos aut, nihil necessitatibus delectus ad fugit sint voluptates!
</p>
              </div>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  };

  export default Tehnikanimekiri;