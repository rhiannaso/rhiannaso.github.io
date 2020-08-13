import React, { Component } from 'react';
import CompInfo from './CompInfo';
import RTX from '../Images/rtx.png';
import Ditto from '../Images/ditto.jpg';
import Tumblr from '../Images/tumblr.png';
import Java from '../Images/java.png';
import Py from '../Images/py.png';
import CPP from '../Images/cpp.png';
import HTML from '../Images/html.png';
import CSS from '../Images/css.png';
import JS from '../Images/js.png';
import SQL from '../Images/sql.png';
import RLogo from '../Images/react.png';
import Qt from '../Images/qt.png';
import Fb from '../Images/firebase.png';
import Bash from '../Images/bash.png';

export class About extends Component {
  render() {
    const companies = [
      {
        title: "Software Engineering Intern",
        name: "Raytheon Technologies",
        desc: ["Developed an automated code correction tool from its initial design \
        stages to a fully functional model", "Designed and programmed code correction \
        scripts that fixed defects in over 1,000 test cases", "Worked as a part of a \
        cyber team with an agile workflow"],
        src: RTX,
        start: "June '19/'20",
        end: "Aug. '19/'20"
      },
      {
        title: "Software Engineering Intern",
        name: "Ditto Labs, Inc.",
        desc: ["Encouraged user engagement by implementing discovery features that \
        incentivized user-to-user interaction", "Worked as a part of a startup to \
        produce continuous deliverables using test-driven development"],
        src: Ditto,
        start: "Apr. 2020",
        end: "June 2020"
      },
      {
        title: "Web Page Designer",
        name: "Tumblr",
        desc: ["Designed and developed web pages made specifically for Tumblr blogs \
        that have been used by over 1,000 users", "Communicated clearly with users \
        and distributed code to interested users"],
        src: Tumblr,
        start: "Aug. 2013",
        end: "Jan. 2019"
      },
    ]
    const fluent = [
      { name: "Java", src: Java },
      { name: "Python", src: Py },
      { name: "C++", src: CPP },
      { name: "HTML", src: HTML },
      { name: "CSS", src: CSS },
      { name: "JavaScript", src: JS }
    ]
    const familiar = [
      { name: "ReactJS", src: RLogo },
      { name: "SQL", src: SQL },
      { name: "Bash", src: Bash },
      { name: "Qt", src: Qt },
      { name: "Firebase", src: Fb },
    ]
    const tools = ["Git/GitHub", "Jenkins", "Figma", "Linux", "Jira", "Confluence"]
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
        <div className="abt-wrapper">
          <div className="header">Experience</div>
          <div className="comp-body">
            {companies.map((comp) => (
              <CompInfo comp={comp} />
            ))}
          </div>
          <br/>
          <div className="header">Skills</div><br/>
          <div className="skills-body">
            <div className="comp-sect">
              <div className="skills-head">Languages I Speak:</div>
              <div className="lang-sect">
                <div className="lang-subsect">
                  <span className="skills-subhead">Fluent In:</span><br/>
                  <div className="lang-list">
                    {fluent.map((lang) => (
                      <div className="spacer">
                        <img src={lang.src} className="skill-tech" />
                        <span className="tech-name">{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lang-subsect">
                  <span className="skills-subhead">Familiar With:</span><br/>
                  <div className="lang-list">
                    {familiar.map((lang) => (
                      <div className="spacer">
                        <img src={lang.src} className="skill-tech" /> 
                        <span className="tech-name">{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="tech-sect divider">
              <div className="skills-head">Technologies:</div>
                {tools.map((tool) => (
                  <div className="spacer">&middot; {tool}</div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;