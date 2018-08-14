import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';

class NavBar extends Component {
  render() {
    return (
      <Row style={{ marginBottom: '0px' }}>
        <Col
          s={12}
          className="grey darken-4 white-text valign-wrapper"
          style={{ height: '90px' }}
        />
      </Row>
    );
  }
}

export default NavBar;
