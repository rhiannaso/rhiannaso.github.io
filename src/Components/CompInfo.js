import React, { Component } from 'react';

export class CompInfo extends Component {
  render() {
    return(
      <div className="comp-sect">
        <div className="comp-info">
          <div className="date">
            {this.props.comp.start} -<br/>
            {this.props.comp.end}
          </div>
          <img src={this.props.comp.src} className="comp-logo" />
        </div>
        <div className="comp-title">
          {this.props.comp.title}
          <span className="comp-subtitle">{this.props.comp.name}</span>
        </div>
        <div className="comp-desc">
          {this.props.comp.desc.map((point) => (
            <div>&middot; {point}<br/></div>
          ))}
        </div>
      </div>
    );
  }
}
export default CompInfo;