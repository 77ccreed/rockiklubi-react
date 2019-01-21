import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Salvestus extends Component {
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
        <Button className="btn-own" onClick={this.toggle} style={{ margin: '1rem' }}>Salvestus</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <p>PC/Cubase 9.5</p>
              <p>Waves</p>
              <p>Midas 32R</p>
              <p>DL251</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Salvestus;