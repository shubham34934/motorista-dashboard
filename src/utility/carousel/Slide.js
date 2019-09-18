import React, { Component } from 'react';
import './carousel.scss';

export default class Slide extends Component {
    constructor (props) {
      super(props)
      
      this.state = {currentSlide: 0}
    }

    render(){
        return(
            <div className="slide">
            
            </div> 
        );    
      
    }
}