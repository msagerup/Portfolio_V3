import React, { Component } from 'react';
import { Row } from 'react-materialize';
import Splash from './Splash';
import Bio from './Bio';
class Info extends Component {
  render() {
    return (
      <Row>
        <Splash />
        <Bio />
      </Row>
    );
  }
}

export default Info;
