import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Fade from 'react-reveal/Fade';

const komponendiSisu = [
  {
    pealkiri: "Pa",
    tekst:<React.Fragment>
      <p>EV Xi 1152/64 4tk</p>
      <p>EV subwoofer 18" 2tk</p>
      <p>Amp rack Crest + LMS DBX</p>
    </React.Fragment>    
  },
  {
    pealkiri: "Foh Mixer",
    tekst: <React.Fragment>
      <p>Yamaha 01v96v2 </p>
      <p>Midas M32R</p>
    </React.Fragment>
  },
  {
    pealkiri: "Monitor",
    tekst: <React.Fragment>
      <p>3 pcs. 2“+12“ 500w , 3 lines</p>
    </React.Fragment>
  },
  {
    pealkiri: "Microphones",
    tekst: <React.Fragment>
      <p>Shure SM57</p>
      <p>Shure SM58</p>
      <p>Shure 16a</p>
      <p>Shure beeta 52</p>
      <p>Shure beeta 57</p>
      <p>Shure beeta 58</p>
    </React.Fragment>
  },
  {
    pealkiri: "Backline",
    tekst: <React.Fragment>
      <p>Bass amps: Ampeg PF-800 head ja Ampeg PF-410HLF kabinet</p>
      <p>Bass amp Hughes&Kettner 1x15 120w </p>
      <p>Guitar amp Carlsbro GLX100 1x12 combo</p>
      <p>Carvin MTS3200 2x12 combo</p>
      <p>Marshall 4x12" MG412B Cab</p>
    </React.Fragment>
  },
  {
    pealkiri: "Drumms",
    tekst: <React.Fragment>
      <p>PDP Concept 10",12",14",16", 22" bass</p>
      <p>14" snare</p>
      <p>3 symbal stands</p>
      <p>1 hi-hat stand</p>
    </React.Fragment>
  },
  {
    pealkiri: "Salvestus",
    tekst: <React.Fragment>
      <p>PC/Cubase 9.5</p>
      <p>Waves</p>
      <p>Midas 32R</p>
      <p>DL251</p>
    </React.Fragment>
  },
]

const TehnikaItem = (props) => {
  return (
    <Content komponendiSisu={komponendiSisu} />
  );
};


class Content extends React.Component {
  render() {
    const { komponendiSisu} = this.props; // ES6 destructuring

    return (       
        komponendiSisu.map((sisu) => (
          <Fade bottom key={sisu.pealkiri}>
          <ActivityItem sisu={sisu} className="m-2 p-2" ke />
          </Fade>
        ))
    )
  }
}

class ActivityItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    const { sisu } = this.props; // ES6 destructuring

    return (
      <div>
        <Button className="btn-own" onClick={this.toggle} style={{ margin: '1rem' }}>{sisu.pealkiri}</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
             {sisu.tekst}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }
}

export default TehnikaItem;