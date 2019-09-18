import React, { Component } from 'react'
import './carousel.scss';

export default class Dots extends Component {
    constructor (props) {
      super(props)
      
      this.state = {currentSlide: 0}
    }

    render(){
      return(
        <div className="dots">
            <span class="fa fa-circle checked"></span> 
              <span class="fa fa-circle checked"></span> 
              <span class="fa fa-circle checked"></span> 
              <span class="fa fa-circle checked"></span> 
              <span class="fa fa-circle checked"></span> 
        </div> 
      );

    
    }
}