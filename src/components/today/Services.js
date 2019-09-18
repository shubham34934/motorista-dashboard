import React from 'react';
import './today.scss';

function Today(props) {
  const position={
    position: "absolute",

  }

  return (
    <div className={`services ${props.title}`}>
       <div className={`circle ${props.bgColor}`}>{props.value}</div>
       <div className="number">{props.title}</div>
    </div>
  );
}

export default Today;
