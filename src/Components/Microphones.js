import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Microphones extends Component {
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
        <Button onClick={this.toggle} style={{ margin: '1rem' }}>Microphones</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <p>Shure SM57</p>
              <p>Shure SM58</p>
              <p>Shure 16a</p>
              <p>Shure beeta 52</p>
              <p>Shure beeta 57</p>
              <p>Shure beeta 58</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Microphones;