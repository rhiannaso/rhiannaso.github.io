import React, { Component } from 'react';
import Resume from '../Images/resume.pdf';
import ResumeImg from '../Images/resume.jpg';
import DL from '../Images/download.png';
import Mail from '../Images/mail.png';
import LinkedIn from '../Images/linked_in.png';
import GH from '../Images/gh2.png';

export class Contact extends Component {
  render() {
    return(
      <div id="contact">
        <div className="contact-wrap">
          <div className="lh-side">
            <a href={Resume} target="_blank">
              <img src={ResumeImg} className="resume" />
            </a>
          </div>
          <div className="rh-side">
            <div className="spacer"></div>
            <div className="contact-msg">Let's<br/>Connect!</div>
            <div className="icon-bar">
              <a href="mailto:so.rhianna@gmail.com"><img src={Mail} className="icon" /></a>
              <a href="https://www.linkedin.com/in/rhianna-so/" target="_blank"><img src={LinkedIn} className="icon" /></a>
              <a href="https://github.com/rhiannaso" target="_blank"><img src={GH} className="icon" /></a>
            </div>
            <a href={Resume} target="_blank" style={{color: '#FFF'}}>
              <div className="dl-btn">Download <img src={DL} style={{marginLeft: '8px', height: '16px'}} /></div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;