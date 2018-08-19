import React, { Component } from 'react';
import React1 from './TechProjects/React/React1';
import React2 from './TechProjects/React/React2';

import HTML1 from './TechProjects/HTML/HTML1';

class TechProject extends Component {
  renderProjects = (tech, projectNumber) => {
    // React Projects check
    if (tech === 'React' && projectNumber === 1) {
      return <React1 />;
    } else if (tech === 'React' && projectNumber === 2) {
      return <React2 />;
    } else if (tech === 'React' && projectNumber === 3) {
      return <React2 />;
    }
    // HTML Projects
    else if (tech === 'HTML' && projectNumber === 1) {
      return <HTML1 />;
    }
  };

  render() {
    const { tech, projectNumber } = this.props;
    return <div>{this.renderProjects(tech, projectNumber)}</div>;
  }
}

export default TechProject;
