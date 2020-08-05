import React, { Component } from 'react';
import BG from '../Images/landing.png';

export class Landing extends Component {
  render() {
    return(
      <div className="landing animate__animated animate__fadeIn">
        <img src={BG} className="landingImg" />
      </div>
    );
  }
}
export default Landing;