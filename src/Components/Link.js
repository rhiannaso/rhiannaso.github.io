import React, { Component } from 'react';

export class Link extends Component {
  setHover = (link) => {
    if (this.props.link.id !== this.props.activeLink) {
      link.target.style.color = '#10CACA'
    } else {
      link.target.style.cursor = 'default'
    }
  }
  clearHover = (link) => {
    var percentScrolled = (window.pageYOffset/window.innerHeight)*100;
    if (this.props.link.id !== this.props.activeLink) {
      if (this.props.activeLink === 0 && percentScrolled < 20) {
        link.target.style.color = '#FFF' 
      } else {
        link.target.style.color = '#555' 
      }
    } else {
      link.target.style.cursor = 'pointer'
    }
  }
  addStyling = () => {
    var percentScrolled = (window.pageYOffset/window.innerHeight)*100;
    if (this.props.link.id === this.props.activeLink) {
      return { color: '#0EB3B3' }
    } else {
      if (this.props.activeLink === 0) {
        if (percentScrolled > 20) {
          return { color: '#555' }
        } else {
          return { color: '#FFF' }
        }
      } else {
        return { color: '#555' }
      }
    }
  }

  render() {
    return(
      <div className='link'>
        <a href={this.props.link.src} style={this.addStyling()} onMouseOver={this.setHover} onMouseOut={this.clearHover} onClick={this.props.changeLink.bind(this, this.props.link.id)}>{this.props.link.title}</a>
      </div>
    );
  }
}
export default Link;