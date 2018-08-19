import React from 'react';
import { Row, Col, Card } from 'react-materialize';

const About = () => {
  return (
    <React.Fragment>
      <Row>
        <h2 className=" grey-text  text-darken-4 center-align small-margin">
          About Me
        </h2>
        <h5
          className="center-align h5-move-up letter-spacing"
          style={{ color: '#8cb59b' }}
        >
          Allow me to introduce myself.
        </h5>
      </Row>
      <Card className="grey darken-1">
        <Row>
          <p>
            I am obsessed with coding and learning. My spesciallity is{' '}
            <span>Front-End</span> development, but I also love the complexity
            of server-side logic. I live currentlty in Oslo and am looking for a
            development role localy. Feel free to <a href="#">contact me </a>{' '}
            directly. Or have a look at my <a href="#">CV</a> for a more
            detailed background of me.
          </p>
        </Row>
        <Row>
          <p>
            If you are looking for a helping hand and you feel I would be good
            fit for your project, feel free to contact me by filling in the{' '}
            <a href="#">contact form</a>
          </p>
        </Row>
      </Card>
    </React.Fragment>
  );
};

export default About;
