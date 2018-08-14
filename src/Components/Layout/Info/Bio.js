import React from 'react';
import About from './About';
import Contact from './Contact';
import { Row, Col, Card, Tabs, Tab } from 'react-materialize';
const Bio = () => {
  return (
    <div>
      <Col l={5} s={12}>
        <Tabs className="tabs-fixed-width">
          <Tab className="grey darken-2" title="About">
            <Card className="grey darken-3">
              <p>This is About</p>
            </Card>
          </Tab>
          <Tab className="grey darken-2" title="Skills">
            <Card className="grey darken-3">
              <p>This is Skills</p>
            </Card>
          </Tab>
          <Tab className="grey darken-2" title="Contact">
            <Card className="grey darken-3">
              <Contact />
            </Card>
          </Tab>
        </Tabs>
      </Col>
    </div>
  );
};

export default Bio;
