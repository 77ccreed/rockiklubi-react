import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Pa extends Component {
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
        <Button className="btn-own" onClick={this.toggle} style={{ margin: '1rem' }}> PA</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <p>EV Xi 1152/64 4tk</p>
              <p>EV subwoofer 18" 2tk</p>
              <p>Amp rack Crest + LMS DBX</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Pa;