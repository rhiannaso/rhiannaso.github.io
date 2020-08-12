import React, { Component } from 'react';
import Project from './Project';
import Py from '../Images/py.png';
import BC from '../Images/bc.png';
import Qt from '../Images/qt.png';
import Cov from '../Images/coverity.png';
import RDS from '../Images/rds.png';
import Java from '../Images/java.png';
import SQL from '../Images/sql.png';
import RLogo from '../Images/react.png';
import Fb from '../Images/firebase.png';
import Omdb from '../Images/omdb.png';
import D3 from '../Images/d3.png';
import Oracle from '../Images/oracle.png';

export class Projects extends Component {
  render() {
    const projects = [
      {
        title: "3CT: Coverity Code Correction Tool",
        desc: "A tool that generates potential solutions for defective files by \
        processing artifacts generated by Coverity Analysis. For each file, \
        users are able to view what kind of defect was detected, as well as \
        the proposed solution, with the ability to apply the solution to the file.",
        date: "June 2019 - August 2019",
        class: "proj proj-1",
        techImg: [Py, Cov, Qt, BC],
        techTxt: ["Python", "Coverity Analysis", "PyQt", "BeyondCompare"],
        gh: "",
        ghSrc: "",
      },
      {
        title: "Personal Site",
        desc: "A fun website I created as part of my human-computer interaction course \
        during the 2020 spring quarter. Creating this site helped me familiarize myself \
        with React and learn to work with APIs and data visualization.",
        date: "April 2020 - June 2020",
        class: "proj proj-2",
        techImg: [RLogo, Fb, Omdb, D3],
        techTxt: ["React", "Firebase", "OMDb API", "D3 JavaScript Library"],
        gh: "- View GitHub Repository -",
        ghSrc: "https://github.com/rhiannaso/react-portfolio",
      },
      {
        title: "ReciPull",
        desc: "A web application that takes a user-inputted list of ingredients (through \
          the app or Alexa skill) and outputs recipes containing those ingredients. \
          Users are able to filter searches, as well as upvote or downvote recipes.",
        date: "April 2019 - June 2019",
        class: "proj proj-1",
        techImg: [Java, SQL, RLogo, RDS],
        techTxt: ["Java", "MySQL", "ReactJS", "AWS Relational Database Service"],
        gh: "",
        ghSrc: "",
      },
      {
        title: "ATM/Bank Teller Interface",
        desc: "A command line program that I created in my introductory databases class, \
        which simulates the interface of an ATM and bank teller. It handles the behavior \
        of various financial transactions and updates its database with changes.",
        date: "October 2019 - December 2019",
        class: "proj proj-2",
        techImg: [Java, SQL, Oracle],
        techTxt: ["Java", "SQL", "Oracle Database"],
        gh: "- View GitHub Repository -",
        ghSrc: "https://github.com/rhiannaso/Project",
      }
    ]
    return(
      <div id="projects">
        <div className="header">My Projects</div>
        <div className="proj-wrapper">
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    );
  }
}
export default Projects;