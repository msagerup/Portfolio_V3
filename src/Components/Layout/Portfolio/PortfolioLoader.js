import React, { Component } from 'react';
import Project from './Project';
import { Row, Col, CardPanel, Card, Tabs, Tab } from 'react-materialize';

class PortfolioLoader extends Component {
  render() {
    return (
      <div>
        <Row className="grey darken-3 ">
          <Col l={7} s={12}>
            <h4 className="blue-grey-text text-lighten-4 splash_text_small">
              Check out! Projects beloω...
            </h4>
            <p className="blue-grey-text text-lighten-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              at omnis dignissimos nam ipsum totam, sunt architecto aspernatur
              maxime, veritatis quas mollitia quis, ad porro illo molestias
              velit! Sed, corrupti. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Accusamus quaerat id placeat earum similique
              dolorem suscipit possimus. Suscipit id repellat doloremque quidem
              temporibus ut rem voluptatibus optio cum, similique maiores.
            </p>

            <Tabs className="grey darken-2 tabs-fixed-width">
              <Tab title="React" className="grey darken-2" active>
                <Project tech="React" />
              </Tab>
              <Tab title="HTML" className="grey darken-2">
                <Project tech="HTML" />
              </Tab>
              <Tab title="Bootstrap CSS" className="grey darken-2">
                <Project tech="BootStrap" />
              </Tab>
              <Tab title="Materialize CSS" className="grey darken-2">
                <Project />
              </Tab>
            </Tabs>
          </Col>
          <Col l={5} s={12} className="grey darken-4">
            <Card className="grey darken-3">
              <h1 className="splash_text white-text">шΘГк</h1>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PortfolioLoader;
