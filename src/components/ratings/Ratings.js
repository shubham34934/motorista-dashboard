import React from 'react';
import './ratings.css';


function Ratings() {
  return (
    <div className="rating-content">
       <h3 className='heading'>Bike Registered Details and Ratings</h3>
       <hr/>
       <div className="body">
          <div className="circle"><i class="fa fa-motorcycle" aria-hidden="true"></i></div>
          <h2>82</h2>
          <h4>Bike Registered</h4>
          <button class="new-registration">New Registration</button>
          <hr></hr>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <h3 className="ratings">950 Ratings</h3>
       </div>
    </div> 
  );
}

export default Ratings;
