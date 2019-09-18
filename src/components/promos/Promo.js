import React from 'react';
import './promos.css';


function Promo(props) {
  return (
    <div className="promo-content">
       <div className="body">
           <div className="highlight">{props.title}</div>   
           <div className="sent">
             <i class="fa fa-users" aria-hidden="true"></i>
             <h2>{props.sent}</h2>
             <h4>Sent to Costumer</h4>     
           </div>
           <div className="used">
             <i class="fa fa-users" aria-hidden="true"></i>
             <h2>{props.used}</h2>
             <h4>Used by Costumer</h4>     
           </div>
           <div className="carousel">
              <span class="fa fa-circle checked"></span> 
              <span class="fa fa-circle checked"></span> 
              <span class="fa fa-circle checked"></span> 
              <span class="fa fa-circle checked"></span> 
              <span class="fa fa-circle checked"></span>   
           </div>
       </div>
    </div>
  );
}

export default Promo;
