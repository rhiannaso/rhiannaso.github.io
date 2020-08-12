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
  enlarge(imgSrc) {
    var lbContent = document.createElement('img');
    lbContent.className = 'lightbox-content';
    lbContent.src = imgSrc;
    lbContent.id = 'lbContent';
    var lightbox = document.createElement('div');
    lightbox.id = 'lb';
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);  
    document.getElementById('lb').appendChild(lbContent);
    document.getElementById('lb').addEventListener('click', function(event) {
      if(event.target.className !== 'lightbox-content') {
        document.getElementById('lb').removeChild(document.getElementById('lbContent'));
        document.body.removeChild(document.getElementById('lb'));
      }
    });
  }

  displaySlides(currIndex, n) {
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (currIndex > slides.length) {
      slideIndex = 1;
    }
    if (currIndex < 1) {
      slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
      slides[slideIndex-1].style.animation = "fadeOut .5s";
      slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active-dot");
    }
    slides[slideIndex-1].style.animation = "fadeIn .5s";
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add("active-dot");
  }

  currentSlide(n) {
    slideIndex = n;
    this.displaySlides(slideIndex);
  }

  switchSlide(n) {
    slideIndex = slideIndex + n;
    this.displaySlides(slideIndex, n);
  }

  toggleSlides() {
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
        <div className="header">My Designs</div><br/>
        <div className="slide-deck">
          <div>
           <img src={LArrow} className="slide-arrow l-arrow" onClick={this.switchSlide.bind(this, -1)} />
          </div>
          {slides.map((slide) => (
            <div className="slide" onClick={this.enlarge.bind(this, slide)}>
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
        <div className="slide-info">
          This is a redesign I created for a hackathon app idea, Boba'd, that my team and I had. During WomxnHacks 2.0
          in January 2020, three of my friends and I created this very simple iOS app with an even simpler UI. Due to 
          time constraints and our learning curve, we didn't have much time to put into the design and overall user 
          experience. These are the highlights of my reimagined design for our app.
        </div>
      </div>
    );
  }
}
export default Portfolio;