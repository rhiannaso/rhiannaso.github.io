import React, { Component } from 'react';
import PFP from '../Images/pfp.jpg';
import Art from '../Images/Artwork.png';
import Typed from 'typed.js';

export class Landing extends Component {
  componentDidMount() {
    // Typing element from: https://mattboldt.com/demos/typed-js/
    var options = {
      strings: ['Growing Developer', 'Aspiring Engineer', 'Learning Student', 'Curious Designer', 'Sporadic Writer', 'Casual Home Baker', 'Avid Music Listener'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };
    this.typed = new Typed(this.subtitle, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return(
      <div id="landing" className="animate__animated animate__fadeIn">
        <div className="intro">
          <img src={PFP} className="profile" />
          <div className="text-sect">
            <span className="title">Hi there,<br/>I'm Rhianna!</span>
            <div className="subtitle">
              <span
                style={{ whiteSpace: 'pre' }}
                ref={(subtitle) => { this.subtitle = subtitle; }}
              />
            </div>
          </div>
        </div>
        <img src={Art} className="landingImg" />
      </div>
    );
  }
}
export default Landing;