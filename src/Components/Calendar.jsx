import React, { Component } from 'react';
import './calendar.css'; 

class Calendar extends Component{
  render(){
    return(
      <div className='popup'>
        <div className='popup_inner'>
          <h1>Calendar</h1>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    )
  }
}

export default Calendar;