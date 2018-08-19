import React, { Component } from 'react';
import TechProject from './TechProject';
import { Card, Pagination } from 'react-materialize';
class Project extends Component {
  state = {
    pageActive: 1
  };

  onSelect = page => {
    this.setState({
      pageActive: page
    });
    console.log(this.state);
  };

  render() {
    const { tech } = this.props;
    const { pageActive } = this.state;

    return (
      <Card className="blue-grey lighten-1">
        <div style={{ height: '600px' }}>
          <TechProject projectNumber={pageActive} tech={tech} />

          <Pagination
            items={3}
            activePage={1}
            onSelect={this.onSelect}
            className=" center-align"
          />
        </div>
      </Card>
    );
  }
}

export default Project;
