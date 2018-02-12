
import * as React from 'react'
const one = require('../../../assets/images/1.jpeg');
const two = require('../../../assets/images/2.jpeg');
const three = require('../../../assets/images/3.jpeg');
const four = require('../../../assets/images/4.jpeg');
const five = require('../../../assets/images/5.jpeg');
const six = require('../../../assets/images/6.jpeg');

// general styles
import 'react-responsive-carousel/lib/styles/main.css';

// carousel styles
import 'react-responsive-carousel/lib/styles/carousel.css';

var Carousel = require('react-responsive-carousel').Carousel;
class CarouselComponent extends React.Component{
  render(){
    return (
      <Carousel showArrows={true} >
          <div>
              <img src={one} className="img-responsive" />
              <p className="legend">Legend 1</p>
          </div>
          <div>
              <img src={two} className="img-responsive"/>
              <p className="legend">Legend 2</p>
          </div>
          <div>
              <img src={three} className="img-responsive"/>
              <p className="legend">Legend 3</p>
          </div>
          <div>
              <img src={four} className="img-responsive"/>
              <p className="legend">Legend 4</p>
          </div>
          <div>
              <img src={five} className="img-responsive"/>
              <p className="legend">Legend 5</p>
          </div>
          <div>
              <img src={six} className="img-responsive"/>
              <p className="legend">Legend 6</p>
          </div>
      </Carousel>
  );
  }
}

export {CarouselComponent}