import React from 'react';
import './servicePlaced.css';
import './../../App.css';

class Bar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const height=this.props.value;
    const rectangle = {
      height: '130px',
      width:'20px',
      backgroundColor:'#0284FF',
      display: 'inline-block'
    };
    return (
      <div className="bar">
        <div style={rectangle}>         
        </div>
        <div className="x-value">{this.props.value}</div>
      </div>
    );
  }
}
export default Bar;
