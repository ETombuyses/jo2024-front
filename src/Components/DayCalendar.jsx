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
        <p onClick={this.onClick.bind(this)} style={this.props.isChosen === true ? {background: '#0C1971', color: '#FFF'} : {background: '#FFF', color: '#000000'}} className='popupDate__single'>{this.props.text}</p>
      </div>
    )
  }
}

export default DayCalendar;