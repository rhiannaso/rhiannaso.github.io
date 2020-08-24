import React, { Component } from 'react';
import Resume from '../Images/resume.pdf';
import ResumeImg from '../Images/resume.jpg';
import DL from '../Images/download.png';
import Mail from '../Images/mail.png';
import LinkedIn from '../Images/linked_in.png';
import GH from '../Images/gh.png';
import Open from '../Images/open.png';

export class Contact extends Component {
  constructor()
  {
    super();
    this.state = {
      display: 'none',
      filter: 'brightness(1.0)'
    }
  }
  showMsg = () => {
    this.setState({ display: 'flex', filter: 'brightness(0.5)' });
  }
  hideMsg = () => {
    this.setState({ display: 'none', filter: 'brightness(1.0)' });
  }
  render() {
    return(
      <div id="contact">
        <div className="header">- Let's Connect! -</div>
        <div className="contact-wrap">
          <div className="spacer"></div>
          <a href={Resume} target="_blank" style={{color: "#FFF"}}>
            <div className="dl-btn">Download <img src={DL} style={{marginLeft: ".25rem", height: "1rem"}} /></div>
          </a>
          <div className="resume-seg">
            <a href={Resume} target="_blank">
              <img src={ResumeImg} className="resume" onMouseOver={this.showMsg} onMouseOut={this.hideMsg} style={{filter: this.state.filter, transition: 'ease-in .1s'}} />
              <div className="open-msg" onMouseOver={this.showMsg} onMouseOut={this.hideMsg} style={{display: this.state.display, transition: 'ease-in .1s'}}>
                <img src={Open} style={{width: '3.5rem'}} />
              </div>
            </a>
          </div>
        </div>
        <div className="footer">
          <div className="contact-msg">Contact Me:</div>
          <div className="icon-bar">
            <a href="mailto:so.rhianna@gmail.com"><img src={Mail} className="icon" /></a>
            <a href="https://www.linkedin.com/in/rhianna-so/" target="_blank"><img src={LinkedIn} className="icon" /></a>
            <a href="https://github.com/rhiannaso" target="_blank"><img src={GH} className="icon-small" /></a>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;