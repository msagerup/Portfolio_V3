import React, { Component } from 'react';
import Project from './Project';
import { Row, Col, CardPanel, Card, Tabs, Tab } from 'react-materialize';

class PortfolioLoader extends Component {
  render() {
    return (
      <div>
        <Row className="grey darken-3 ">
          <Col s={12} l={7}>
            <Row>
              <Col l={6} s={12} className="white-text">
                <h3>Check out my work below:</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, perferendis neque omnis, illum similique quia
                  facere unde rem sequi quibusdam doloribus voluptates fuga
                  tenetur architecto odio nemo labore nostrum saepe.
                </p>
              </Col>
            </Row>
            <Tabs
              tabOptions={{
                swipeable: true
              }}
              className="grey darken-3 white-text"
            >
              <Tab title="React">
                <Project tech="React" />
              </Tab>
              <Tab title="Pure HTML">
                <Project tech="HTML" />
              </Tab>

              <Tab title="BootStrap CSS">
                <Project tech="BootStrap" />
              </Tab>
              <Tab title="Materialize CSS">
                <Project tech="Materialize" />
              </Tab>
            </Tabs>
          </Col>
          <Col l={5} s={12} className="grey darken-4">
            <h1 className="splash_text white-text">шΘГк</h1>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PortfolioLoader;
