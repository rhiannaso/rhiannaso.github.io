import React, { Component } from 'react';
import B1 from '../Images/B1.png';
import B2 from '../Images/B2.png';
import B3 from '../Images/B3.png';
import B4 from '../Images/B4.png';
import B5 from '../Images/B5.png';
import LArrow from '../Images/l_arrow.png';
import RArrow from '../Images/r_arrow.png';
var slideIndex = 1;

export class Portfolio extends Component {
  displaySlides(n) {
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active-dot");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add("active-dot");
  }

  currentSlide(n) {
    slideIndex = n;
    this.displaySlides(slideIndex);
  }

  switchSlide(n) {
    slideIndex = slideIndex + n;
    this.displaySlides(slideIndex);
  }

  toggleSlides() {
    console.log(slideIndex);
    this.displaySlides(slideIndex);
  }

  componentDidMount() {
    this.toggleSlides();
  }

  render() {
    const slides = [B1, B2, B3, B4, B5]
    const dots = [1, 2, 3, 4, 5]
    return(
      <div id="portfolio">
        <div className="header">Designs</div><br/>
        <div className="slide-deck">
          <div>
           <img src={LArrow} className="slide-arrow l-arrow" onClick={this.switchSlide.bind(this, -1)} />
          </div>
          {slides.map((slide) => (
            <div className="slide">
              <img src={slide} className="slideImg" />
            </div>
          ))}
          <div>
           <img src={RArrow} className="slide-arrow r-arrow" onClick={this.switchSlide.bind(this, 1)}/>
          </div>
        </div>
        <div className="tracker">
          {dots.map((dot) => (
            <span className="dot" onClick={this.currentSlide.bind(this, dot)}></span>
          ))}
        </div>
      </div>
    );
  }
}
export default Portfolio;