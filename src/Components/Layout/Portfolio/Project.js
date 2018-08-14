import React, { Component } from 'react';
import { CardPanel } from 'react-materialize';
class Project extends Component {
  render() {
    const { tech } = this.props;
    return (
      <CardPanel className="grey darken-4">
        <h4 style={{ backgroundColor: 'red' }}>This is a {tech} Project</h4>
      </CardPanel>
    );
  }
}

export default Project;
