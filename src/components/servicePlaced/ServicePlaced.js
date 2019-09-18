import React from 'react';
import './servicePlaced.css';
import './../../App.css';
import Bar from './Bar'


function ServicePlaced() {
  return (
    <div className="service-placed">
       <h3> Service Placed</h3>
       <hr/>
       <div className="checkbox">
         <div className="box"></div>
         <div className="title">Registered Bike Per Day</div>
       </div>
       <div className="chart">
          <div className="y-value">
            <li>40</li>
            <li>30</li>
            <li>20</li>
            <li>10</li>
            <li>00</li>
          </div>
          <div className="bars">
            <Bar value="130"/>
            <Bar value="130"/>
            <Bar value="130"/>
            <Bar value="130"/>
            <Bar value="130"/>
            <Bar value="130"/>
            <Bar value="130"/>
          </div>
         
       </div>
       

    </div>
  );
}

export default ServicePlaced;
