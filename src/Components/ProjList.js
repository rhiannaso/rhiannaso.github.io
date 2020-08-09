import React, { Component } from 'react';
import Project from './Project';

export class ProjList extends Component {  
  render() {
    return this.props.projects.map((project) => (
      <Project project={project} />
    ));
  }
}
export default ProjList;