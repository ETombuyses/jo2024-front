import React, { Component } from 'react';
import './calendar.css';

class DayCalendar extends Component{
  constructor(props){
    super(props);
  }

  onClick(){
    const txt = this.props.text;
    console.log(txt)
  }
  render(){
    return(
      <div>
        <p onClick={this.onClick.bind(this)} className='popupDate__single'>{this.props.text}</p>
      </div>
    )
  }
}

export default DayCalendar;