import React from 'react';
import './today.scss';
import Services from './Services'

function Today() {
  return (
    <div className="today-container">
      <h2 className="today">Today</h2>
      <div className="text"><div className="number">40</div><div className="total-service"> Total Services</div></div>
      <div className="half-circle">   
      <Services bgColor="pending-circle" value="12" title="Pending"/>
      <Services bgColor="incomplete-circle" value="22" title="Inprogress"/>
      <Services bgColor="completed-circle" value="34" title="Completed"/>
      <Services bgColor="inprogress-circle" value="14" title="Incomplete"/></div>
      <div className="half-circle-dashed"></div>
    </div>
  );
}

export default Today;
