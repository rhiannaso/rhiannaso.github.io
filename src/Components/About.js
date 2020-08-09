import React, { Component } from 'react';

export class About extends Component {
  render() {
    return(
      <div id="about">
        <div className="blurb">
          <div className="blurb-title">It's nice to meet you.</div>
          <div className="blurb-body">
            I'm an incoming fourth year computer science major at UCSB with a passion 
            for tech and design. My desire is to be a part of building the bridge that 
            covers the gap between users and technology, in order to make everyday 
            experiences easier.
          </div>
        </div>
      </div>
    );
  }
}
export default About;