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
            <img src={this.props.project.techImg[0]} className="tech" /> {this.props.project.techTxt[0]}<br/>
            <img src={this.props.project.techImg[1]} className="tech" /> {this.props.project.techTxt[1]}<br/>
            <img src={this.props.project.techImg[2]} className="tech" /> {this.props.project.techTxt[2]}<br/>
            <img src={this.props.project.techImg[3]} className="tech" /> {this.props.project.techTxt[3]}<br/>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;