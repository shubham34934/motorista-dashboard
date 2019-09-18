import React from 'react';
import './notifications.css';
import './../../App.css';
import Row from './Row'




const allNotifications=[
  <Row first="12ASGUY7649" second="17-09-2019" third="17-09-2019" fourth="Yes" statusStyle="status-button" />,
  <Row first="12ASGUY7649" second="17-09-2019" third="17-09-2019" fourth="Yes" statusStyle="status-button" />,
  <Row first="12ASGUY7649" second="17-09-2019" third="17-09-2019" fourth="Yes" statusStyle="status-button" />,
  <Row first="12ASGUY7649" second="17-09-2019" third="17-09-2019" fourth="Yes" statusStyle="status-button" />,
  <Row first="12ASGUY7649" second="17-09-2019" third="17-09-2019" fourth="Yes" statusStyle="status-button" />,
  <Row first="12ASGUY7649" second="17-09-2019" third="17-09-2019" fourth="Yes" statusStyle="status-button" />,
  <Row first="12ASGUY7649" second="17-09-2019" third="17-09-2019" fourth="Yes" statusStyle="status-button" />,
  <Row first="12ASGUY7649" second="17-09-2019" third="17-09-2019" fourth="Yes" statusStyle="status-button" />,
  <Row first="12ASGUY7649" second="17-09-2019" third="17-09-2019" fourth="Yes" statusStyle="status-button" />,
]

const tableHead=[
  <Row first="Service ID" second="Date and Time" third="Date and Time" fourth="Pickup Status" style="bold" background="grey-background" />
]

function Notifications() {
  function listHandler(){
    console.log("logged");
  }  
  
  return (
    <div className="notification-container">
       <h3 className="title">Current Service Notification</h3>
       <h3 className="duration">Last 7 Days</h3>
       <div className="clear"></div>
       <hr/> 
       <div className="notifications">
         {tableHead}
         {allNotifications}
       </div>
       <div onClick={listHandler} className="view-more">View More</div>
    </div>
  );
}

export default Notifications;
