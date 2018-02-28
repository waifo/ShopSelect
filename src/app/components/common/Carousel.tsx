
import * as React from 'react'
const one = require('../../../assets/images/1.jpg');
const two = require('../../../assets/images/14.jpg');
const three = require('../../../assets/images/21.png');
const four = require('../../../assets/images/35.jpg');
const five = require('../../../assets/images/5.jpg');
const six = require('../../../assets/images/6.jpg');

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