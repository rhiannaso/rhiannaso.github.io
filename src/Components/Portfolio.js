import React, { Component } from 'react';
import B1 from '../Images/B1.png';
import B2 from '../Images/B2.png';
import B3 from '../Images/B3.png';
import B4 from '../Images/B4.png';
import B5 from '../Images/B5.png';
import LArrow from '../Images/l_arrow.png';
import RArrow from '../Images/r_arrow.png';

export class Portfolio extends Component {
  render() {
    return(
      <div id="portfolio">
        <div className="header">Designs</div><br/>
        <div className="slide-deck">
          <div>
           <img src={LArrow} className="slide-arrow l-arrow" />
          </div>
          <div className="slide">
            <img src={B1} className="slideImg" />
          </div>
          <div>
           <img src={RArrow} className="slide-arrow r-arrow" />
          </div>
        </div>
        <div className="tracker">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    );
  }
}
export default Portfolio;