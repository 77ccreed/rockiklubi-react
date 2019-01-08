import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import "./../Css/Tehnikanimekiri.css";

class FohMixer extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button className="btn-own" onClick={this.toggle} style={{ margin: '1rem' }}> Foh Mixer</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <p>Yamaha 01v96v2 </p>
              <p>Midas M32R</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default FohMixer;