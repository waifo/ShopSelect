import * as React from 'react';
import Slider from 'react-slick';
import '../../../styles/SlickCarousel.css'

const one = require('../../../assets/images/4.jpg');
const two = require('../../../assets/images/6.jpg');
const three = require('../../../assets/images/7.jpg');
const four = require('../../../assets/images/22.jpg');
const five = require('../../../assets/images/25.jpg');
const six = require('../../../assets/images/27.jpg');
 
class SlickCarousel extends React.Component {
  render () {
    var settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      };
    return (
      <Slider {...settings}>
        <div className="slick-carousel-image"><img src={one}  alt=""/></div>
        <div className="slick-carousel-image" ><img src={two} alt=""/></div>
        <div className="slick-carousel-image"><img src={three}  alt=""/></div>
        <div className="slick-carousel-image" ><img src={four} alt=""/></div>
        <div className="slick-carousel-image" ><img src={five} alt=""/></div>
        <div className="slick-carousel-image" ><img src={six} alt=""/></div>
      </Slider>
    );
  }
}

export {SlickCarousel}