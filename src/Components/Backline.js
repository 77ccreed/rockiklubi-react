import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Backline extends Component {
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
        <Button onClick={this.toggle} style={{ margin: '1rem' }}>Backline</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <p>Bass amps: Ampeg PF-800 head ja Ampeg PF-410HLF kabinet</p>
              <p>Bass amp Hughes&Kettner 1x15 120w </p>
              <p>Guitar amp Carlsbro GLX100 1x12 combo</p>
              <p>Carvin MTS3200 2x12 combo</p>
              <p>Marshall 4x12" MG412B Cab</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Backline;