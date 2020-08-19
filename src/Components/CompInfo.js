import React, { Component } from 'react';

export class CompInfo extends Component {
  render() {
    return(
      <div className="comp-sect">
        <div className="comp-info">
          <img src={this.props.comp.src} className="comp-logo" />
        </div>
        <div className="comp-title">
          {this.props.comp.title}<br/>
          <span className="comp-subtitle">{this.props.comp.name} | </span> 
          <span className="date">
            {this.props.comp.start} - {this.props.comp.end}
          </span>
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