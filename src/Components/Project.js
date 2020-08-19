import React, { Component } from 'react';

export class Project extends Component {
  render() {
    return(
      <div className="proj">
        <img src={this.props.project.src} className="proj-img" />
        <div className="proj-name">{this.props.project.title}</div>
        <span className="proj-subhead">{this.props.project.date}</span>
        <div className="proj-body">
          {this.props.project.desc}
          <br/><br/>
          <span className="proj-subhead">Technologies Used:</span>
          <br/>
          <div className="tech-list">
            {this.props.project.techImg.map((tech, i) => (
              <div><img src={tech} className="tech" /> {this.props.project.techTxt[i]}<br/></div>
            ))}
          </div>
          <br/>
          <div className="gh-view">
            <a href={this.props.project.ghSrc}>{this.props.project.gh}</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;