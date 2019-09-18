import React from 'react';
import Today from './components/today/Today';
import ServicePlaced from './components/servicePlaced/ServicePlaced';
import Notifications from './components/notifications/Notifications';
import Promos from './components/promos/Promos';
import Ratings from './components/ratings/Ratings';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="dashboard-container">
       <h4>Dashboard</h4>
       <h2>Service Overview</h2>
       <div className="section">
          <Today/>
       </div>  
       <div className="section">
          <ServicePlaced/>
       </div>    
       <div className="section-half">
          <Ratings/>
       </div> 
       <div className="section-half">
          <Promos/>
       </div> 
       <div className="section">
          <Notifications/>
       </div>
      </div>
    </div>
  );
}

export default App;

