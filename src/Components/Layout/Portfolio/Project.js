import React, { Component } from 'react';
import { Card } from 'react-materialize';
class Project extends Component {
  render() {
    const { tech } = this.props;
    return (
      <Card className=" deep-orange lighten-5">
        <div style={{ height: '600px' }}>
          <h5 className="blue-text text-darken-3">{tech}</h5>
        </div>
      </Card>
    );
  }
}

export default Project;
