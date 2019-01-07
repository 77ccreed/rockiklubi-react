import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Drumms extends Component {
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
        <Button onClick={this.toggle} style={{ margin: '1rem' }}>Drumms</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <p>PDP Concept 10",12",14",16", 22" bass</p>
              <p>14" snare</p>
              <p>3 symbal stands</p>
              <p>1 hi-hat stand</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Drumms;