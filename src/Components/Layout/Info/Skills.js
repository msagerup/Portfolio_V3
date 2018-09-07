import React from 'react';
import { Row, Col, Card } from 'react-materialize';

const Skills = () => {
  return (
    <React.Fragment>
      <Row>
        <h3 className=" grey-text text-darken-4 center-align small-margin">
          Skills Of The Trade
        </h3>
        <div className="headline-bottom">
          <div className="headline-icon">
            <i class="fas fa-book" />
          </div>
        </div>
        <h6
          className="center-align  letter-spacing"
          style={{ color: '#ffa531' }}
        >
          I use these tools of the trade on a regular
        </h6>
      </Row>
      <Card className="grey darken-1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          vitae. Reprehenderit sunt totam corrupti velit cupiditate quisquam
          porro eveniet tenetur! Obcaecati reprehenderit amet sed nihil iste
          dolore magni qui! Odit deserunt ratione voluptas obcaecati minima
          corporis sapiente laboriosam. Error, soluta provident. Ex, ab neque
          dignissimos explicabo consectetur voluptatibus iure perferendis?
        </p>
      </Card>
    </React.Fragment>
  );
};

export default Skills;
