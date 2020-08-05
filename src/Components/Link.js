import React, { Component } from 'react';

export class Link extends Component {
  addStyling = () => {
    var percentScrolled = (window.pageYOffset/window.innerHeight)*100;
    if (this.props.link.id === this.props.activeLink) {
      return { color: '#6096C8' }
    } else {
      if (this.props.activeLink === 0) {
        if (percentScrolled > 30) {
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
      <div className='link' style={this.addStyling()} onClick={this.props.changeLink.bind(this, this.props.link.id)}>
        {this.props.link.title}
      </div>
    );
  }
}
export default Link;