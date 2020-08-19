import React, { Component } from 'react';
import Landing from './Landing';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Arrow from '../Images/arrow.png';

export class Body extends Component {
  constructor()
  {
    super();
    this.state = {
      display: "none",
      activeLink: 0
    }
    this.changeLink = (id) => {
      this.setState({
        activeLink: id
      })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.prepScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.prepScroll);
  }

  prepScroll = () => {
    var windowHeight = window.innerHeight;
    var amtScrolled = window.pageYOffset;
    var percentScrolled = (amtScrolled/windowHeight)*100;
    var sect1Dist = document.getElementById("about").offsetTop-1;
    var sect2Dist = document.getElementById("projects").offsetTop-1;
    var sect3Dist = document.getElementById("portfolio").offsetTop-1;
    var sect4Dist = document.getElementById("contact").offsetTop-1;

    if (percentScrolled > 20) {
      this.setState({ display: "block" });
    } else {
      this.setState({ display: "none", activeLink: 0 });
    }

    if (amtScrolled < sect1Dist-60) {
      this.setState({ activeLink: 0 });
    } else if (amtScrolled >= sect1Dist-60 && amtScrolled < sect2Dist-60) {
      this.setState({ activeLink: 1 });
    } else if (amtScrolled >= sect2Dist-60 && amtScrolled < sect3Dist-60) {
      this.setState({ activeLink: 2 });
    } else if (amtScrolled >= sect3Dist-60 && amtScrolled < sect4Dist-60) {
      this.setState({ activeLink: 3 });
    } else {
      this.setState({ activeLink: 4 });
    }
  }

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.setState({ activeLink: 0 });
  }

  toggleNavBar = () => {
    var activeLink = this.state.activeLink;
    var percentScrolled = (window.pageYOffset/window.innerHeight)*100;
    if (activeLink === 0) {
      if (percentScrolled > 20) {
        return { 
          display: "flex",
          backgroundColor: "#FFF",
          animation: "fadeInDown .3s",
        }
      } else {
        return {
          display: "none",
          backgroundColor: "transparent",
          borderBottom: "none",
          boxShadow: "none",
          animation: "fadeOutUp .3s",
        }
      }
    } else {
      return { 
        display: "flex",
        backgroundColor: "#FFF",
        animation: "fadeInDown .3s", 
      }
    }
  }

  render() {
    const sections = [
      {
        id: 1,
        title: "About",
        src: "#about"
      },
      {
        id: 2,
        title: "Projects",
        src: "#projects"
      },
      {
        id: 3,
        title: "Portfolio",
        src: "#portfolio"
      },
      {
        id: 4,
        title: "Resume",
        src: "#contact"
      },
    ]
    return(
      <div className="main-body">
        <div className="nav animate__animated animate__slideInDown" style={this.toggleNavBar()}>
          <div className="logo" style={{display: this.state.display}}>
            <a href="#landing" style={{color: "#111"}}>RS</a>
          </div>
          <Nav sections={sections} changeLink={this.changeLink} activeLink={this.state.activeLink} />
        </div>
        <Landing />
        <About />
        <Projects />
        <Portfolio />
        <Contact />
        <div className="scroll-btn" style={{display: this.state.display, animation: "fadeIn .2s"}} onClick={this.scrollToTop}>
          <img src={Arrow} className="arrow" />
        </div>
      </div>
    );
  }
}
export default Body;