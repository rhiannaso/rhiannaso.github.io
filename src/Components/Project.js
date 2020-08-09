import React, { Component } from 'react';

export class Project extends Component {
  render() {
    return(
      <div className={this.props.project.class}>
        <div className="proj-name">{this.props.project.title}</div>
        <div className="proj-body">
          {this.props.project.desc}
          <br/><br/>
          <span className="proj-subhead">Time Worked On: </span>&nbsp;{this.props.project.date}
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