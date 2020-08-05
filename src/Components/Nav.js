import React, { Component } from 'react';
import Link from './Link';

export class Nav extends Component {
  render() {
    return this.props.sections.map((link) => (
      <Link link={link} changeLink={this.props.changeLink} activeLink={this.props.activeLink}/>
    ));
  }
}
export default Nav;