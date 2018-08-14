import React from 'react';
import About from './About';
import { Row, Col, Card, Tabs, Tab } from 'react-materialize';
const Bio = () => {
  return (
    <div>
      <Col l={5} s={12}>
        <Card className="grey darken-3">
          <Tabs className="tabs-fixed-width">
            <Tab className="grey darken-2" title="About">
              <About />
            </Tab>
            <Tab className="grey darken-2" title="Skills">
              <p>This is Skills</p>
            </Tab>
            <Tab className="grey darken-2" title="Contact">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              reprehenderit impedit, dignissimos ducimus unde laboriosam
              asperiores eveniet tempora doloremque eum excepturi? Nemo,
              voluptate dolorum ducimus voluptatem repellat reiciendis
              temporibus ullam?
            </Tab>
          </Tabs>
        </Card>
      </Col>
    </div>
  );
};

export default Bio;
