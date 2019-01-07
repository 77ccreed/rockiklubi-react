import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Monitor extends Component {
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
        <Button onClick={this.toggle} style={{ margin: '1rem' }}>Monitor</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <p>3 pcs. 2“+12“ 500w , 3 lines</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Monitor;