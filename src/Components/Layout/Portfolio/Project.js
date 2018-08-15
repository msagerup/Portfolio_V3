import React, { Component } from 'react';
import { Card, Pagination } from 'react-materialize';
class Project extends Component {
  render() {
    const { tech } = this.props;
    return (
      <Card className="blue-grey lighten-1">
        <div style={{ height: '600px' }}>
          <h5 className=" blue-grey-text text-lighten-4">{tech}</h5>
          <Pagination items={3} activePage={1} className=" center-align" />
        </div>
      </Card>
    );
  }
}

export default Project;
