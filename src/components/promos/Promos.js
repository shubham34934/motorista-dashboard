import React from 'react';
import './promos.css';
import Carousel from './../../utility/carousel/Carousel';
import Promo from './Promo';


function Promos() {
  let slideNumber=0;
  const sliderData=[
    <Promo title="25% Labour discount and 30% Oil discount" sent="192" used="80"/>,<Promo/>
  ]
  setInterval(() => slideNumber=slideNumber+1, 2000);

  return (
    <div className="promo-content">
       <h3>Promo</h3>
       <hr/>
        {sliderData[slideNumber]}
    </div>
  );
}

export default Promos;
