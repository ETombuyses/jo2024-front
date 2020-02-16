import React, { Component } from 'react';

class DayCalendar extends Component{
  constructor(props){
    super(props);
    this.state = {
      day: this.props.text,
      month: this.props.month
    }
  }

  onClick(){
    this.props.onNewDate({
      day: this.state.day,
      month: this.state.month
    })
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