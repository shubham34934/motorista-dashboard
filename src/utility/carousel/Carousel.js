import React, { Component } from 'react';
import './carousel.scss';
import Dots from './Dots';
import Slide from './Slide';

export default class Carousel extends Component {
  
    constructor (props) {
      super(props)
      
      this.state = {currentSlide: 0}
    }

    

    render(){
      return (
        <div className="carousel">
          <div className="slides">
            <div className="slide">
              <Slide/>
            </div>
          </div>
          <div className="dots">
            <Dots/>
          </div>
        </div>
      );

      
    }
}