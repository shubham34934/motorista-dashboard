import React from 'react';
import './notifications.css';


function Row(props) {
  return (
    <div className={`row ${props.background}`}>
        <div className={`item first ${props.style}`}>{props.first}</div>
        <div className={`item first ${props.style}`}>{props.second}</div>
        <div className={`item first ${props.style}`}>{props.third}</div>
        <div className={`item first ${props.style}`}>
          <div className={props.statusStyle}>{props.fourth}</div>
        </div>
    </div>
  );
}

export default Row;
